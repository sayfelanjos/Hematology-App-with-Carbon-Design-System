import {
  Body,
  Controller,
  Get,
  Post,
  Session,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { CreateUserDto } from "../user/create-user.dto";
import { AuthSignInDto } from "./auth-signin.dto";

@Controller("auth")
export class AuthController {
  constructor(
    private usersService: UserService,
    private authService: AuthService,
  ) {}

  @Post("/signin")
  async signIn(@Body() signInDto: AuthSignInDto, @Session() session: any) {
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
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signUp(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @Post("/signout")
  signOut(@Session() session: any) {
    session.userId = null;
  }
}
