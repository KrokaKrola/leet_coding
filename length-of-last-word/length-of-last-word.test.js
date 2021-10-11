const lengthOfLastWord = require("./length-of-last-word");

describe("length-of-last-word", () => {
  it("should return 5 for 'Hello World'", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });
  it("should return 4 for '   fly me   to   the moon  '", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  });
  it("should return 6 for 'luffy is still joyboy'", () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  });
});
