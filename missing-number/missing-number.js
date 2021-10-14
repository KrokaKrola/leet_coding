/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length; i++) {
    if (sorted[i] !== i) {
      return i;
    }
  }

  return 0;
};

console.log(missingNumber([0, 1]));
