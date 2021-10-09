const removeElement = require("./remove-element");

describe("remove element", () => {
  it("should return 2 for [3, 2, 2, 3]", () => {
    const a = [3, 2, 2, 3];

    expect(removeElement(a, 3)).toBe(2);
    expect(a).toEqual([2, 2]);
  });

  it("should return 5 for [0,1,2,2,3,0,4,2]", () => {
    const a = [0, 1, 2, 2, 3, 0, 4, 2];

    expect(removeElement(a, 2)).toBe(5);
    expect(a).toEqual([0, 1, 3, 0, 4]);
  });
});
