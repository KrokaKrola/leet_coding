/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0) {
    return 0;
  }

  let top = x;
  let bottom = 0;
  let guess;

  while (bottom <= top) {
    guess = Math.round((top + bottom) / 2);
    if (guess * guess > x) {
      top = guess - 1;
    }
    if (guess * guess < x) {
      bottom = guess + 1;
    }
    if (guess * guess === x) {
      return guess;
    }
  }

  return top;
};

console.log(mySqrt(8));

module.exports = mySqrt;
