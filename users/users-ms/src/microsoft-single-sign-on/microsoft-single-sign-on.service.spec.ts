import { Test, TestingModule } from "@nestjs/testing";
import { MicrosoftSingleSignOnService } from "./microsoft-single-sign-on.service";

describe("MicrosoftSingleSignOnService", () => {
  let service: MicrosoftSingleSignOnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicrosoftSingleSignOnService],
    }).compile();

    service = module.get<MicrosoftSingleSignOnService>(
      MicrosoftSingleSignOnService,
    );
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
