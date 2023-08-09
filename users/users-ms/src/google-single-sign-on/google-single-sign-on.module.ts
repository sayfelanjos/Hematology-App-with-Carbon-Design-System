import { Module } from "@nestjs/common";
import { GoogleSingleSignOnService } from "./google-single-sign-on.service";
import { GoogleSingleSignOnController } from "./google-single-sign-on.controller";
import { UserModule } from "../user/user.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [UserModule, JwtModule],
  controllers: [GoogleSingleSignOnController],
  providers: [GoogleSingleSignOnService],
})
export class GoogleSingleSignOnModule {}
