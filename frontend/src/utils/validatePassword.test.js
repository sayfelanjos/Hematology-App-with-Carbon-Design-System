import { validatePassword } from "./validatePassword";

const invalidPasswords = [
  {
    password: "",
    note: "password is required",
  },
];

describe("password validator", () => {
  invalidPasswords.map((invalidPassword) => {
    test("password field can't be empty", () => {
      expect(validatePassword(invalidPassword.password)).toBeFalsy();
    });
  });
});
