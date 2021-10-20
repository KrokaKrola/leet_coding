/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    let indexOfElem = nums2.findIndex((item) => item === nums1[i]);
    let greterElem;
    for (let j = indexOfElem + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        result.push(nums2[j]);
        greterElem = nums2[j];
        break;
      }
    }

    if (!greterElem) {
      result.push(-1);
    }
  }

  return result;
};

module.exports = nextGreaterElement;
