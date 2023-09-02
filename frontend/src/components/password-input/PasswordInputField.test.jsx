import { fireEvent, render, screen } from "@testing-library/react";
import PasswordInputField from "./PasswordInputField";

describe("validating password input", () => {
  const setup = () => {
    const { container } = render(<PasswordInputField />);
    const input = screen.getByLabelText(/Password/i);
    return {
      input,
      container,
    };
  };
  test("the password field start empty, valid and don't showing message error", async () => {
    const { input, container } = setup();
    expect(input).toHaveValue("");
    expect(input).not.toBeInvalid();
    expect(container).not.toHaveTextContent(/Campo password é obrigatório!/i);
  });

  test("if the password field is empty and gets blurred after getting focused, get the password field invalid and get a message error", () => {
    const { input, container } = setup();
    expect(input).toHaveValue("");
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(input).toBeInvalid();
    expect(container).toHaveTextContent(/Campo password é obrigatório!/i);
  });
});
