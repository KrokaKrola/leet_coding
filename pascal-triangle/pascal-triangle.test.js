const generate = require("./pascal-triangle");

describe("pascal-triangl", () => {
  it("should generate 5 correct arrays for input 5", () => {
    expect(generate(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });

  it("should generate 1 correct array for input 1", () => {
    expect(generate(1)).toEqual([[1]]);
  });

  it("should generate 2 correct array for input 2", () => {
    expect(generate(2)).toEqual([[1], [1, 1]]);
  });
});
