import { UpdateUserDto } from "./update-user.dto";
import { UserService } from "./user.service";
import { User } from "./user.entity";
export declare class UserController {
    private usersService;
    constructor(usersService: UserService);
    findUser(id: string): Promise<User>;
    findAllUser(email: string): Promise<User[]>;
    removeUser(id: string): Promise<User>;
    updateUser(id: string, body: UpdateUserDto): Promise<User>;
}
