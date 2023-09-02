import React, { useReducer } from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginPanel from "./LoginPanel";

const setup = () => {
  const { container } = render(
    <MemoryRouter>
      <LoginPanel />
    </MemoryRouter>,
  );
  const emailInput = screen.getByRole("textbox", { name: /Email/i });
  const continueBtn = screen.getByRole("button", { name: /Continuar/i });
  return {
    emailInput,
    continueBtn,
    container,
  };
};

describe("login panel integration testing", () => {
  test("if the email is invalid, when clicking the Continue button, it is not possible to move forward", () => {
    const { emailInput, continueBtn } = setup();
    fireEvent.focus(emailInput);
    fireEvent.change(emailInput, { target: { value: "email.example.com" } });
    fireEvent.click(continueBtn);
    expect(emailInput).toBeInTheDocument();
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  test("if type a invalid email and press Enter key, don't continue", () => {
    const { emailInput, container } = setup();
    fireEvent.focus(emailInput);
    fireEvent.change(emailInput, { target: { value: "email.example.com" } });
    fireEvent.keyPress(emailInput, { key: "Enter", code: "Enter", charCode: 13 });
    expect(emailInput).toBeInvalid();
    expect(container).toHaveTextContent(/Coloque um email válido!/i);
  });

  test("if type a valid email and press Enter key, continue", async () => {
    const { emailInput } = setup();
    fireEvent.focus(emailInput);
    fireEvent.change(emailInput, { target: { value: "email@example.com" } });
    fireEvent.keyPress(emailInput, { key: "Enter", code: "Enter", charCode: 13 });
    expect(emailInput).toBeValid();
    expect(emailInput).not.toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  test("if the email is valid, when clicking the Continue button, move forward", () => {
    const { emailInput, continueBtn } = setup();
    fireEvent.focus(emailInput);
    fireEvent.change(emailInput, { target: { value: "email@example.com" } });
    fireEvent.click(continueBtn);
    expect(emailInput).not.toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });
});
