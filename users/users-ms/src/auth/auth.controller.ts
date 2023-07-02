import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Session,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { AuthService } from "./auth.service";
import { AuthGuard } from "../guards/auth.guard";
import { CreateUsersDto } from "../users/dto/create-users.dto";
import { SignInDto } from "./dto/signInDto.dto";

@Controller("auth")
export class AuthController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post("/signin")
  async signIn(@Body() signInDto: SignInDto, @Session() session: any) {
    const user = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );
    session.userToken = user.access_token;
    return user;
  }
  @Get("/whoami")
  @UseGuards(AuthGuard)
  whoAmI(@Session() session: any) {
    return this.usersService.findOne(session.userId);
  }

  @Post("/signup")
  async createUser(@Body() body: CreateUsersDto, @Session() session: any) {
    const user = await this.authService.signUp(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @Post("/signout")
  signOut(@Session() session: any) {
    session.userId = null;
  }
}
