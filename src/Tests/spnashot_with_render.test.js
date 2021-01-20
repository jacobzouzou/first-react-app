import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const value = getByText(/Test with jest/);
  expect(value).toBeInTheDocument();
});

//snapthot
it("renders correctly", () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
