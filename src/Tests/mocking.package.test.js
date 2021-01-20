const mathjs = require("../../__mocks__/maths")
// import mathjs from "../../__mocks__/maths";

test(`The mathjs substract function`, () => {
  const result = mathjs.substract(10000, 1000);
  expect(result).toBe(9000);
  expect(mathjs.substract).toHaveBeenCalled();
  expect(mathjs.substract).toHaveBeenCalledWith(10000, 1000);
})
