import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Query,
  Param,
  Delete,
  NotFoundException,
  Session,
  UseGuards,
} from "@nestjs/common";
import { Serialize } from "../interceptors/serialize.interceptor";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUsersDto } from "./dto/update-users.dto";
import { UsersService } from "./users.service";
import { UsersDto } from "./dto/users.dto";
import { AuthService } from "../auth/auth.service";
import { CurrentUser } from "./decorators/current-user.decorator";
import { Users } from "./entities/users.entity";
import { AuthGuard } from "../guards/auth.guard";

@Controller("auth")
@Serialize(UsersDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get("/whoami")
  @UseGuards(AuthGuard)
  whoAmI(@CurrentUser() user: Users) {
    return user;
  }

  @Post("/signup")
  async createUser(@Body() body: CreateUsersDto, @Session() session: any) {
    const user = await this.authService.signup(body.email, body.password);
    session.userid = user.id;
    return user;
  }

  @Post("/signout")
  signOut(@Session() session: any) {
    session.userid = null;
  }

  @Post("/signin")
  async signin(@Body() body: CreateUsersDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userid = user.id;
    return user;
  }

  @Get("/:id")
  async findUser(@Param("id") id: string) {
    const user = this.usersService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException("user not found");
    }
    return user;
  }

  @Get()
  findAllUsers(@Query("email") email: string) {
    return this.usersService.find(email);
  }

  @Delete()
  removeUser(@Param("id") id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch("/:id")
  updateUser(@Param("id") id: string, @Body() body: UpdateUsersDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
