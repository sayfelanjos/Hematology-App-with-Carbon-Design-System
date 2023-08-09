import { Test, TestingModule } from "@nestjs/testing";
import { MicrosoftSingleSignOnController } from "./microsoft-single-sign-on.controller";

describe("MicrosoftSingleSignOnController", () => {
  let controller: MicrosoftSingleSignOnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicrosoftSingleSignOnController],
    }).compile();

    controller = module.get<MicrosoftSingleSignOnController>(
      MicrosoftSingleSignOnController,
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
