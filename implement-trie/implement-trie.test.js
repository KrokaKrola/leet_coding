const Trie = require("./implement-trie");

describe("implement-trie", () => {
  it("should not be any errors", () => {
    const trie = new Trie();
    trie.insert("apple");

    expect(trie.search("apple")).toBe(true);
    expect(trie.search("appl")).toBe(false);
    expect(trie.startsWith("app")).toBe(true);
    expect(trie.startsWith("pp")).toBe(false);

    trie.insert("app");
    expect(trie.search("app")).toBe(true);
  });
});
