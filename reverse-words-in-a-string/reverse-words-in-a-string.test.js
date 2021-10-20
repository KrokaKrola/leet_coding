const reverseWords = require("./reverse-words-in-a-string");

describe("reverseWords", () => {
  it("should output 'blue is sky the' for s='the sky is blue'", () => {
    expect(reverseWords("the sky is blue")).toBe("blue is sky the");
  });

  it("should output 'world hello' for s='  hello world  '", () => {
    expect(reverseWords("  hello world  ")).toBe("world hello");
  });

  it("should output 'example good a' for s='a good   example'", () => {
    expect(reverseWords("a good   example")).toBe("example good a");
  });

  it("should output 'Alice Loves Bob' for s='  Bob    Loves  Alice   '", () => {
    expect(reverseWords("  Bob    Loves  Alice   ")).toBe("Alice Loves Bob");
  });

  it("should output 'bob like even not does Alice' for s='Alice does not even like bob'", () => {
    expect(reverseWords("Alice does not even like bob")).toBe(
      "bob like even not does Alice"
    );
  });
});
