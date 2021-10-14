/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const map = new Map();

  for (let num of nums) {
    if (map.has(num)) {
      return num;
    } else {
      map.set(num);
    }
  }

  return 0;
};

const res = findDuplicate([1, 3, 4, 2, 2]);
console.log(res);
