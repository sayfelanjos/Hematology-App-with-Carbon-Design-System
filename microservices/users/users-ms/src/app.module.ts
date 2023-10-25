import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { User } from "./user/user.entity";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { GoogleSingleSignOnModule } from "./google-single-sign-on/google-single-sign-on.module";
import { MicrosoftSingleSignOnModule } from "./microsoft-single-sign-on/microsoft-single-sign-on.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      database: process.env.POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    AuthModule,
    GoogleSingleSignOnModule,
    MicrosoftSingleSignOnModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
