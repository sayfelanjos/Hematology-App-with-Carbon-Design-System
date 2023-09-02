import { BadRequestException, Injectable } from "@nestjs/common";
import { google } from "googleapis";
import { UserService } from "../user/user.service";

@Injectable()
export class GoogleSingleSignOnService {
  constructor(private usersService: UserService) {}

  oauthClient() {
    return new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      `http://${process.env.APP_HOST}:${process.env.APP_PORT}/auth/google/callback`,
    );
  }

  getAccessAndBearerTokenUrl({ access_token }) {
    return `http://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`;
  }
  getGoogleOauthUrl() {
    const scopes = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ];

    const oauthClient = this.oauthClient();

    return oauthClient.generateAuthUrl({
      access_type: "offline",
      prompt: "consent",
      scope: scopes,
    });
  }

  async getGoogleUser({ code }) {
    const { tokens } = await this.oauthClient().getToken(code);
    const url = this.getAccessAndBearerTokenUrl({
      access_token: tokens.access_token,
    });
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokens.id_token}`,
      },
    });

    return await response.json();
  }

  async updateUserFromOauth({ oauthUserInfo }) {
    const { id: googleId, email, ...attrs } = oauthUserInfo;
    const existingUser = await this.usersService.find(email);
    if (existingUser) {
      return await this.usersService.update(googleId, attrs);
    }
    throw new BadRequestException("Update user was not possible!");
  }
}
