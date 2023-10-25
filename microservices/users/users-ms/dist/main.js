"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const promises_1 = require("fs/promises");
const path = require("path");
const cookieSession = require("cookie-session");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const document = JSON.parse((await (0, promises_1.readFile)(path.join(process.cwd(), "OpenAPI/definitions/swagger.json"))).toString("utf-8"));
    swagger_1.SwaggerModule.setup("api", app, document);
    app.use((req, res, next) => {
        res.removeHeader("x-powered-by");
        res.removeHeader("date");
        next();
    });
    app.use(cookieSession({
        keys: ["asdfasdfajdkljflkasdj"],
    }));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.enableCors();
    await app.listen(process.env.APP_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map