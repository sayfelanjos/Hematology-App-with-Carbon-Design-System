import { IsEmail, IsString } from "class-validator";
import { ApiBody, ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {
  @ApiProperty({
    description: "User email",
    default: "email@example.com",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "User password",
  })
  @IsString()
  password: string;
}
