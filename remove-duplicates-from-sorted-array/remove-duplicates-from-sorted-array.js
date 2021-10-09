/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      nums.splice(i, 1);
      i--;
    } else {
      map[nums[i]] = true;
    }
  }
  return nums.length;
};

module.exports = removeDuplicates;
