import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("Counter Component", () => {
  it("renders the initial count", () => {
    render(<Counter />);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("increments the count when button is clicked", () => {
    render(<Counter />);
    const button = screen.getByText("Increase");

    fireEvent.click(button); // Simulate click
    expect(screen.getByText("Count: 1")).toBeInTheDocument();

    fireEvent.click(button); // Click again
    expect(screen.getByText("Count: 3")).toBeInTheDocument();
  });
});
