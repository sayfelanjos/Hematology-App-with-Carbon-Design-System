import { IsEmail, IsString, IsOptional, IsNumber } from "class-validator";

export class UpdateUserDto {
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
