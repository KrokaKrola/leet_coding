/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = {};

  for (let num of nums) {
    if (map[num]) {
      map[num] = map[num] + 1;
    } else {
      map[num] = 1;
    }
  }
  return Object.keys(map).find((item) => map[item] === 1);
};

console.log(singleNumber([1, 1, 2, 2, 3]));
