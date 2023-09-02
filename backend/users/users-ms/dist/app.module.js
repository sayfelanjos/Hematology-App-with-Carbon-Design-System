"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_entity_1 = require("./user/user.entity");
const user_module_1 = require("./user/user.module");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const google_single_sign_on_module_1 = require("./google-single-sign-on/google-single-sign-on.module");
const microsoft_single_sign_on_module_1 = require("./microsoft-single-sign-on/microsoft-single-sign-on.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                database: process.env.POSTGRES_DB,
                host: process.env.POSTGRES_HOST,
                port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                entities: [user_entity_1.User],
                synchronize: true,
                logging: true,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            google_single_sign_on_module_1.GoogleSingleSignOnModule,
            microsoft_single_sign_on_module_1.MicrosoftSingleSignOnModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map