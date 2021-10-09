const searchInsert = require("./search-insert-position");

describe("search insert position", () => {
  it("should return 2 for nums = [1,3,5,6], target = 5", () => {
    const result = searchInsert([1, 3, 7, 9], 8);
    console.log(result);
  });

  it("should return 1 for nums = [1,3,5,6], target = 2", () => {
    const result = searchInsert([1, 3, 5, 6], 7);
  });

  it("should return 4 for nums = [1,3,5,6], target = 7", () => {});

  it("should return 0 for nums = [1,3,5,6], target = 0", () => {});

  it("should return 0 for nums = [1], target = 0", () => {});
});
