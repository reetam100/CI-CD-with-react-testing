import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("App Component", () => {
  it("renders hello message", () => {
    render(<App />);
    const heading = screen.getByText(/Hello, React CI\/CD with Vite!/i);
    expect(heading).toBeInTheDocument();
  });
});
