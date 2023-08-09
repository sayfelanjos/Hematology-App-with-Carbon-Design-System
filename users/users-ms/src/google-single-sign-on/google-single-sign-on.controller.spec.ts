import { Test, TestingModule } from "@nestjs/testing";
import { GoogleSingleSignOnController } from "./google-single-sign-on.controller";
import { GoogleSingleSignOnService } from "./google-single-sign-on.service";

describe("GoogleSingleSignOnController", () => {
  let controller: GoogleSingleSignOnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoogleSingleSignOnController],
      providers: [GoogleSingleSignOnService],
    }).compile();

    controller = module.get<GoogleSingleSignOnController>(
      GoogleSingleSignOnController,
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
