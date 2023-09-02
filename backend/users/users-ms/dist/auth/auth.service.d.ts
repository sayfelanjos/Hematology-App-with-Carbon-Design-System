import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../user/user.entity";
import sendgrid from "@sendgrid/mail";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    signIn(email: string, password: string): Promise<{
        access_token: string;
    }>;
    signUp(email: string, password: string): Promise<User>;
    sendEmail({ to, from, subject, text, html }: {
        to: any;
        from: any;
        subject: any;
        text: any;
        html: any;
    }): Promise<[sendgrid.ClientResponse, {}]>;
}
