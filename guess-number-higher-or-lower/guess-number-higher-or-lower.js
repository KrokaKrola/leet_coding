/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let top = 0;
  let bottom = n;

  while (top <= bottom) {
    let picked = Math.round((top + bottom) / 2);
    if (guess(picked) === -1) {
      bottom = picked - 1;
    }
    if (guess(picked) === 1) {
      top = picked + 1;
    }
    if (guess(picked) === 0) {
      return picked;
    }
  }

  return -1;
};
