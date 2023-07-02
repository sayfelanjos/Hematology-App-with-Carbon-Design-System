import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";
import { JwtService } from "@nestjs/jwt";

const scrypt = promisify(_scrypt);
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException("User not Found");
    }
    const [storedSalt, storedHash] = user.password.split(".");
    const hash = (await scrypt(password, storedSalt, 32)) as Buffer;
    if (storedHash !== hash.toString("hex")) {
      throw new UnauthorizedException("Invalid Credentials");
    }
    const payload = { sub: user.id, email: user.email };
    return { access_token: await this.jwtService.signAsync(payload) };
  }

  async signUp(email: string, password: string) {
    const users = await this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException("email in use");
    }
    const salt = randomBytes(8).toString("hex");
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const result = salt + "." + hash.toString("hex");
    return await this.usersService.create(email, result);
  }
}
