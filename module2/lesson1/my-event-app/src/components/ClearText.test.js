import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ClearText from "./ClearText";

describe("ClearText", () => {
  it("clears input value when button is clicked", () => {
    const { getByRole } = render(<ClearText />);
    const input = getByRole("textbox");
    const button = getByRole("button");

    // Simulate typing into the input field
    fireEvent.change(input, { target: { value: "Hello" } });

    // Verify input value
    expect(input.value).toBe("Hello");

    // Simulate clicking the button
    fireEvent.click(button);

    // Verify input value is cleared
    expect(input.value).toBe("");
  });
});
