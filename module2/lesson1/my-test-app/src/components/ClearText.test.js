import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ClearText from "./ClearText";

describe("ClearText", () => {
  //description of  the test
  it("Click clears value", () => {
    const { getByTestId } = render(<ClearText />); //render the componet
    const clearButton = getByTestId("tstbutton"); //get the button
    fireEvent.click(clearButton); //fire a click event which clears the field of the initial value
    const clearValue = getByTestId("tstInput").value; //the value of the input field
    expect(clearValue).toEqual(""); //we expect and empty string
  });
});
