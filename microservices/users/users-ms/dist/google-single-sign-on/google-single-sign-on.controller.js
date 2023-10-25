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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSingleSignOnController = void 0;
const common_1 = require("@nestjs/common");
const google_single_sign_on_service_1 = require("./google-single-sign-on.service");
const jwt_1 = require("@nestjs/jwt");
let GoogleSingleSignOnController = class GoogleSingleSignOnController {
    constructor(googleSingleSignOnService, jwtService) {
        this.googleSingleSignOnService = googleSingleSignOnService;
        this.jwtService = jwtService;
    }
    googleOauthUrl() {
        return { url: this.googleSingleSignOnService.getGoogleOauthUrl() };
    }
    async googleOauthCallback(query) {
        const { code } = query;
        const oauthUserInfo = await this.googleSingleSignOnService.getGoogleUser({
            code,
        });
        const updateUser = await this.googleSingleSignOnService.updateUserFromOauth({
            oauthUserInfo,
        });
        return { access_token: this.jwtService.sign(updateUser) };
    }
};
__decorate([
    (0, common_1.Get)("/url"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], GoogleSingleSignOnController.prototype, "googleOauthUrl", null);
__decorate([
    (0, common_1.Get)("/callback"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleSingleSignOnController.prototype, "googleOauthCallback", null);
GoogleSingleSignOnController = __decorate([
    (0, common_1.Controller)("auth/google"),
    __metadata("design:paramtypes", [google_single_sign_on_service_1.GoogleSingleSignOnService,
        jwt_1.JwtService])
], GoogleSingleSignOnController);
exports.GoogleSingleSignOnController = GoogleSingleSignOnController;
//# sourceMappingURL=google-single-sign-on.controller.js.map