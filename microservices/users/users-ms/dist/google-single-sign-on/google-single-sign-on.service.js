"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSingleSignOnService = void 0;
const common_1 = require("@nestjs/common");
const googleapis_1 = require("googleapis");
const user_service_1 = require("../user/user.service");
let GoogleSingleSignOnService = class GoogleSingleSignOnService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    oauthClient() {
        return new googleapis_1.google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, `http://${process.env.APP_HOST}:${process.env.APP_PORT}/auth/google/callback`);
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
        const { id: googleId, email } = oauthUserInfo, attrs = __rest(oauthUserInfo, ["id", "email"]);
        const existingUser = await this.usersService.find(email);
        if (existingUser) {
            return await this.usersService.update(googleId, attrs);
        }
        throw new common_1.BadRequestException("Update user was not possible!");
    }
};
GoogleSingleSignOnService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], GoogleSingleSignOnService);
exports.GoogleSingleSignOnService = GoogleSingleSignOnService;
//# sourceMappingURL=google-single-sign-on.service.js.map