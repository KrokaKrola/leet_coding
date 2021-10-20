/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push([1]);
    } else {
      let temp = new Array(i);
      temp[0] = 1;
      temp[i] = 1;

      for (let j = 1; j < i; j++) {
        temp[j] = result[i - 1][j - 1] + result[i - 1][j];
      }

      result.push(temp);
    }
  }

  return result;
};

module.exports = generate;
