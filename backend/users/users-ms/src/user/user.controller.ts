import {
  Body,
  Controller,
  Get,
  Patch,
  Query,
  Param,
  Delete,
  NotFoundException,
} from "@nestjs/common";
import { Serialize } from "../interceptors/serialize.interceptor";
import { UpdateUserDto } from "./update-user.dto";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";
import { User } from "./user.entity";

@Controller("user")
@Serialize(UserDto)
export class UserController {
  constructor(private usersService: UserService) {}

  @Get("/:id")
  async findUser(@Param("id") id: string): Promise<User> {
    const user: Promise<User> = this.usersService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException("user not found");
    }
    return user;
  }

  @Get()
  findAllUser(@Query("email") email: string): Promise<User[]> {
    return this.usersService.find(email);
  }

  @Delete("/:id")
  removeUser(@Param("id") id: string): Promise<User> {
    return this.usersService.remove(parseInt(id));
  }

  @Patch("/:id")
  updateUser(
    @Param("id") id: string,
    @Body() body: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(parseInt(id), body);
  }
}
