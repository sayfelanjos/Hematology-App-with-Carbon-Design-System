import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
