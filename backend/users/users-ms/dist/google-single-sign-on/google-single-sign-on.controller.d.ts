import { GoogleSingleSignOnService } from "./google-single-sign-on.service";
import { JwtService } from "@nestjs/jwt";
export declare class GoogleSingleSignOnController {
    private googleSingleSignOnService;
    private jwtService;
    constructor(googleSingleSignOnService: GoogleSingleSignOnService, jwtService: JwtService);
    googleOauthUrl(): Object;
    googleOauthCallback(query: any): Promise<{
        access_token: string;
    }>;
}
