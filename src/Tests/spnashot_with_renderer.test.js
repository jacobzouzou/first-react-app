import React from "react";
import { create, act } from "react-test-renderer";

import App from "../App";

//snapshot with renderer
it("renders correctly", () => {
  let root;
  act(() => {
    root = create(<App />);
  });

  // make assertions on root
  expect(root.toJSON()).toMatchSnapshot();
});
