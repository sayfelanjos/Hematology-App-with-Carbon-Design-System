import { validateEmail } from "./validateEmail";
import { invalidEmailsData } from "./invalidEmailData";
import { validEmailsData } from "./validEmailData";

describe("email validator", () => {
  invalidEmailsData.map((falseEmail) =>
    test(`Email under test: ${falseEmail.email}  Note: ${falseEmail.note}`, () => {
      expect(validateEmail(falseEmail.email)).toBeFalsy();
    }),
  );

  validEmailsData.map((validEmail) =>
    test(`Email under test: ${validEmail.email}  Note: ${validEmail.note}`, () => {
      expect(validateEmail(validEmail.email)).toBeTruthy();
    }),
  );
});
