import { Module } from "@nestjs/common";
import { MicrosoftSingleSignOnController } from "./microsoft-single-sign-on.controller";
import { MicrosoftSingleSignOnService } from "./microsoft-single-sign-on.service";

@Module({
  controllers: [MicrosoftSingleSignOnController],
  providers: [MicrosoftSingleSignOnService],
})
export class MicrosoftSingleSignOnModule {}
