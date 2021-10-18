var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxP = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxP = Math.max(maxP, profit);
    } else {
      left = right;
    }
    right += 1;
  }

  return maxP;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minIndex = 0;
  let maxElIndex;

  for (let i = 1; i < prices.length; i++) {
    if (prices[minIndex] > prices[i]) {
      minIndex = i;
    }
  }

  if (minIndex === prices.length - 1) {
    return 0;
  }

  maxElIndex = minIndex + 1;

  for (let i = minIndex + 1; i < prices.length; i++) {
    if (prices[maxElIndex] < prices[i]) {
      maxElIndex = i;
    }
  }

  return prices[maxElIndex] - prices[minIndex];
};

console.log(maxProfit([2, 4, 1]));
