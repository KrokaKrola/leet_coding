const maxSubArray = require("./maximum-subarray");

describe("maximum-subarray", () => {
  it("should return 6 for nums = [-2,1,-3,4,-1,2,1,-5,4]", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
  it("should return 1 for nums = [1]", () => {
    expect(maxSubArray([1])).toBe(1);
  });
  it("should return 23 for nums = [5,4,-1,7,8]", () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
  });
  it("should return 1 for nums = [-2,1]", () => {
    expect(maxSubArray([-2, 1])).toBe(1);
  });
  it("should return -1 for nums = [-2,-1]", () => {
    expect(maxSubArray([-2, -1])).toBe(-1);
  });
  it("should return 0 for nums = [-1,0,-2]", () => {
    expect(maxSubArray([-1, 0, -2])).toBe(0);
  });
});
