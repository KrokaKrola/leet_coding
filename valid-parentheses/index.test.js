const isValid = require("./index");

test("test", () => {
  expect(isValid("()")).toBe(true);
});
