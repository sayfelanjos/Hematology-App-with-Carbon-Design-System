import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthSchema } from "./schema/auth.schema";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot("mongodb://192.168.49.2:30007", {
      dbName: "authdb",
    }),
    MongooseModule.forFeature([{ name: "Auth", schema: AuthSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
