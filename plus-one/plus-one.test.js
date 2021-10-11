const plusOne = require("./plus-one");

describe("plus-one", () => {
  it("should return [1,2,4] for [1,2,3]", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });
  it("should return [4,3,2,2] for [4,3,2,1]", () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });
  it("should return [1] for [0]", () => {
    expect(plusOne([0])).toEqual([1]);
  });
  it("should return [1,0] for [9]", () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });
  it("should return [1,0,0] for [9,9]", () => {
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
  });
  it("should return [1,0,0,0,0] for [9,9,9,9]", () => {
    expect(plusOne([9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0]);
  });
  it("should return [9,0,0,0] for [8,9,9,9]", () => {
    expect(plusOne([8, 9, 9, 9])).toEqual([9, 0, 0, 0]);
  });
});
