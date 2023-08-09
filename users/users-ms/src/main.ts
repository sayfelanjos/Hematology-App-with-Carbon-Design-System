import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { readFile } from "fs/promises";
const path = require("path");
const cookieSession = require("cookie-session");

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const document = JSON.parse(
    (
      await readFile(path.join(process.cwd(), "api/definitions/swagger.json"))
    ).toString("utf-8"),
  );

  SwaggerModule.setup("api", app, document);

  app.use((req, res, next) => {
    res.removeHeader("x-powered-by");
    res.removeHeader("date");
    next();
  });

  app.use(
    cookieSession({
      keys: ["asdfasdfajdkljflkasdj"],
    }),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.enableCors();

  await app.listen(process.env.APP_PORT);
}
bootstrap();
