import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import LoginPanel from "./LoginPanel";

describe("Testing login panel form", () => {
  test("find", () => {
    render(<LoginPanel />);
  });
});
