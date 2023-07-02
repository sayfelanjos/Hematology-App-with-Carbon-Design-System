import { Test } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";
import { Users } from "../users/entities/users.entity";
import { BadRequestException } from "@nestjs/common";

describe("AuthService", () => {
  it("Can create an instance of auth service", async () => {
    const fakeUsersService: Partial<UsersService> = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password } as Users),
    };
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();
    const service = module.get(AuthService);
    expect(service).toBeDefined();
  });
});
