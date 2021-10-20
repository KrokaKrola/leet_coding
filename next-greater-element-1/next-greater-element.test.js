const nextGreaterElement = require("./next-greater-element-1");

describe("next-greater-emenent-1", () => {
  it("should output [-1,3,-1] for nums1 = [4,1,2], nums2 = [1,3,4,2]", () => {
    const nums1 = [4, 1, 2];
    const nums2 = [1, 3, 4, 2];

    expect(nextGreaterElement(nums1, nums2)).toEqual([-1, 3, -1]);
  });

  it("should output [3,-1] for nums1 = [2,4], nums2 = [1,2,3,4]", () => {
    const nums1 = [2, 4];
    const nums2 = [1, 2, 3, 4];

    expect(nextGreaterElement(nums1, nums2)).toEqual([3, -1]);
  });
});
