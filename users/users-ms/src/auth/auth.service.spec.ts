import { Test } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { UserService } from "../user/user.service";
import { Users } from "../user/entities/user.entity";
import { JwtService } from "@nestjs/jwt";

describe("AuthService", () => {
  let authService: AuthService;
  beforeEach(async () => {
    const fakeUsersService: Partial<UserService> = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password } as Users),
    };
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: fakeUsersService,
        },
        JwtService,
      ],
    }).compile();
    authService = module.get<AuthService>(AuthService);
  });
  test("can create an instance of auth service", async () => {
    expect(authService).toBeDefined();
  });
});
