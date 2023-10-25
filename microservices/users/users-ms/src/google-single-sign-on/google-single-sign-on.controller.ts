import { Controller, Get, Query } from "@nestjs/common";
import { GoogleSingleSignOnService } from "./google-single-sign-on.service";
import { JwtService } from "@nestjs/jwt";

@Controller("auth/google")
export class GoogleSingleSignOnController {
  constructor(
    private googleSingleSignOnService: GoogleSingleSignOnService,
    private jwtService: JwtService,
  ) {}

  @Get("/url")
  googleOauthUrl(): object {
    return { url: this.googleSingleSignOnService.getGoogleOauthUrl() };
  }

  @Get("/callback")
  async googleOauthCallback(@Query() query: any) {
    const { code } = query;
    const oauthUserInfo = await this.googleSingleSignOnService.getGoogleUser({
      code,
    });
    const updateUser = await this.googleSingleSignOnService.updateUserFromOauth(
      {
        oauthUserInfo,
      },
    );
    return { access_token: this.jwtService.sign(updateUser) };
  }
}
