import React from "react";
import { render } from "@testing-library/react";
import { create,act } from "react-test-renderer";
import App from "../App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Testing/);
  expect(linkElement).toBeInTheDocument();
});

//snapthot with renderer
it("renders correctly", () => {
  let root;
  act(() => {
    root = create(<App />);
  });

  // make assertions on root
  expect(root.toJSON()).toMatchSnapshot();
});