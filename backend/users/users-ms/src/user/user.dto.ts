import { Expose } from "class-transformer";

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  googleId: number;

  @Expose()
  email: string;

  @Expose()
  verified_email: string;
}
