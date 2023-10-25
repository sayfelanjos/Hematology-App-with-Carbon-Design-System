import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";
export class CreateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsNumber()
  @IsOptional()
  googleId: number;

  @IsString()
  @IsOptional()
  verified_email: string;
}
