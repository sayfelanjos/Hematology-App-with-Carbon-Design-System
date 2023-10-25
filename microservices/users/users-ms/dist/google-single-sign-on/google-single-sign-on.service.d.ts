import { UserService } from "../user/user.service";
export declare class GoogleSingleSignOnService {
    private usersService;
    constructor(usersService: UserService);
    oauthClient(): import("google-auth-library").OAuth2Client;
    getAccessAndBearerTokenUrl({ access_token }: {
        access_token: any;
    }): string;
    getGoogleOauthUrl(): string;
    getGoogleUser({ code }: {
        code: any;
    }): Promise<any>;
    updateUserFromOauth({ oauthUserInfo }: {
        oauthUserInfo: any;
    }): Promise<import("../user/user.entity").User>;
}
