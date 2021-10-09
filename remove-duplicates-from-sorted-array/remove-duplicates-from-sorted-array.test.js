const removeDuplicates = require("./remove-duplicates-from-sorted-array");

describe("remove duplicates from sorted array", () => {
  it("should return 2 and [1, 2, 3] for [1, 1, 2, 2, 3]", () => {
    const nums = [1, 1, 2, 2, 3];
    const result = removeDuplicates(nums);
    expect(result).toBe(3);
    expect(nums).toStrictEqual([1, 2, 3]);
  });

  it("should return 5 and [0,1,2,3,4] for [0,0,1,1,1,2,2,3,3,4]", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const result = removeDuplicates(nums);
    expect(result).toBe(5);
    expect(nums).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("should return 2 and [1, 2] for [1, 1, 2]", () => {
    const nums = [1, 1, 2];
    const result = removeDuplicates(nums);
    expect(result).toBe(2);
    expect(nums).toStrictEqual([1, 2]);
  });
});
