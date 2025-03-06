// import { render, screen } from "@testing-library/react";
// import Greeting from "./Greeting";
// import { describe, it, expect } from "vitest";

// describe("Greeting Component", () => {
//   it("renders default greeting when no name is provided", () => {
//     render(<Greeting />);
//     expect(screen.getByText("Hello, Guest!")).toBeInTheDocument();
//   });

//   it("renders personalized greeting when name is provided", () => {
//     render(<Greeting name="John" />);
//     expect(screen.getByText("Hello, John!")).toBeInTheDocument();
//   });
// });

import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("renders a default greeting text when no name is provided", () => {
    render(<Header />);
    expect(screen.getByText("Hello, Guest!")).toBeInTheDocument();
  });

  it("renders personalized greeting text, if name is provided", () => {
    render(<Header name="Reetam" />);
    expect(screen.getByText("Hello, Reetam!")).toBeInTheDocument();
  });
});
