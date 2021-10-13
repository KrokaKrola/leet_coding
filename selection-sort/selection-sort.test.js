const selectionSort = require("./selection-sort");

describe("selection-sort", () => {
  it("should return sorted array", () => {
    expect(selectionSort([])).toEqual([]);
    expect(selectionSort([1])).toEqual([1]);
    expect(selectionSort([-1, -5, 2])).toEqual([-5, -1, 2]);
    expect(selectionSort([5, 3, 6])).toEqual([3, 5, 6]);
  });
});
