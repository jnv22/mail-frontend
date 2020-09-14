import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";

test("Renders Delete Element", () => {
  render(<App />);
  const DeleteElement = screen.getByTitle("delete");
  expect(DeleteElement).toBeInTheDocument();
});
