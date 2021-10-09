const strStr = require("./implement-strStr");

describe("implement-strStr", () => {
  it('should output 2 for "hello"', () => {
    expect(strStr("hello", "ll")).toBe(2);
  });

  it('should output -1 for "bba"', () => {
    expect(strStr("aaaaa", "bba")).toBe(-1);
  });

  it('should output 0 for ""', () => {
    expect(strStr("", "")).toBe(0);
  });

  it('should output 4 for "mississippi"', () => {
    expect(strStr("mississippi", "issip")).toBe(4);
  });
});
