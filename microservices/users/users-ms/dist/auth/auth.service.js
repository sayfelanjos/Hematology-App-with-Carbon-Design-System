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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const crypto_1 = require("crypto");
const util_1 = require("util");
const jwt_1 = require("@nestjs/jwt");
const mail_1 = require("@sendgrid/mail");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(email, password) {
        const [user] = await this.usersService.find(email);
        if (!user) {
            throw new common_1.NotFoundException("User not Found");
        }
        const [storedSalt, storedHash] = user.password.split(".");
        const hash = (await scrypt(password, storedSalt, 32));
        if (storedHash !== hash.toString("hex")) {
            throw new common_1.UnauthorizedException("Invalid Credentials");
        }
        const payload = { sub: user.id, email: user.email };
        return { access_token: await this.jwtService.signAsync(payload) };
    }
    async signUp(email, password) {
        const users = await this.usersService.find(email);
        if (users.length) {
            throw new common_1.BadRequestException("email in use");
        }
        const salt = (0, crypto_1.randomBytes)(8).toString("hex");
        const hash = (await scrypt(password, salt, 32));
        const result = salt + "." + hash.toString("hex");
        return await this.usersService.create(email, result);
    }
    sendEmail({ to, from, subject, text, html }) {
        mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = { to, from, subject, text, html };
        return mail_1.default.send(msg);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map