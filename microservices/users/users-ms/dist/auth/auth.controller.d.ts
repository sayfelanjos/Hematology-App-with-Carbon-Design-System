import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../user/create-user.dto";
import { AuthSignInDto } from "./auth-signin.dto";
export declare class AuthController {
    private usersService;
    private authService;
    constructor(usersService: UserService, authService: AuthService);
    signIn(signInDto: AuthSignInDto, session: any): Promise<{
        access_token: string;
    }>;
    whoAmI(session: any): Promise<import("../user/user.entity").User>;
    createUser(body: CreateUserDto, session: any): Promise<import("../user/user.entity").User>;
    signOut(session: any): void;
}
