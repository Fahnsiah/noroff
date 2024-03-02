import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

describe("NavigationMenu", () => {
  it("navigates to the correct route when a link is clicked", () => {
    render(
      <Router>
        <NavigationMenu />
      </Router>
    );

    // Verify that the user is initially on the home page
    expect(screen.getByText("Home")).toBeInTheDocument();

    // Simulate clicking on the "About" link
    fireEvent.click(screen.getByText("About"));

    // Verify that the user is now on the "About" page
    expect(screen.getByText("About")).toBeInTheDocument();

    // You can add similar tests for other routes
  });
});
