import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import EmailInputField from "./EmailInputField";
import { MemoryRouter } from "react-router-dom";

describe("validating email input", () => {
  const setup = () => {
    const container = render(
      <MemoryRouter>
        <EmailInputField />
      </MemoryRouter>,
    );
    const input = screen.getByRole("textbox", { name: /Email/i });
    return {
      input,
      ...container,
    };
  };

  test("the e-mail field start empty, valid and don't showing message error", async () => {
    const { input, container } = setup();
    expect(input).toHaveValue("");
    expect(input).not.toBeInvalid();
    expect(container).not.toHaveTextContent(/Coloque um email válido!/i);
  });

  test("if the email field is empty and gets blurred after getting focused, get the email field invalid and get a message error", () => {
    const { input, container } = setup();
    expect(input).toHaveValue("");
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(input).toBeInvalid();
    expect(container).toHaveTextContent(/Coloque um email válido!/i);
  });

  test("after getting a message error, if getting focus again, the message goes away", () => {
    const { input, container } = setup();
    expect(input).toHaveValue("");
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(input).toBeInvalid();
    expect(container).toHaveTextContent(/Coloque um email válido!/i);
    fireEvent.focus(input);
    expect(container).not.toHaveTextContent(/Coloque um email válido!/i);
  });

  test("if type a valid email and get blurred after getting focused, don't will receive an error message", () => {
    const emailValue = "email@example.com";
    const { input } = setup();
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: emailValue } });
    fireEvent.blur(input);
    expect(input).toBeValid();
  });

  test("if type a invalid email and get blurred after getting focused, get error message", () => {
    const emailValue = 'a"b(c)d,e:f;g<h>i[j\\k]l@example.com';
    const { input, container } = setup();
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: emailValue } });
    fireEvent.blur(input);
    expect(input).toBeInvalid();
    expect(container).toHaveTextContent(/Coloque um email válido!/i);
  });

  test("if type a valid email and press Enter key, continue", async () => {
    const emailValue = "email@example.com";
    const { input } = setup();
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: emailValue } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });
    expect(input).toBeValid();
  });

  test("if type a invalid email and press Enter key, don't continue", () => {
    const emailValue = "email.example.com";
    const { input, container } = setup();
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: emailValue } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });
    expect(input).toBeInvalid();
    expect(container).toHaveTextContent(/Coloque um email válido!/i);
  });
});
