import { Test, TestingModule } from "@nestjs/testing";
import { GoogleSingleSignOnService } from "./google-single-sign-on.service";
import { UserModule } from "../user/user.module";

describe("GoogleSingleSignOnService", () => {
  let service: GoogleSingleSignOnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
      providers: [GoogleSingleSignOnService],
    }).compile();

    service = module.get<GoogleSingleSignOnService>(GoogleSingleSignOnService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
