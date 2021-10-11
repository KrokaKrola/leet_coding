const numbers = new Array(100).fill(null).map((_, index) => index + 10);
/**
 * @param {number} number
 * @param {array} list
 * @return {number}
 * */
function binarySearch(number, list) {
  let top = 0;
  let bottom = list.length - 1;
  let index;

  while (top <= bottom) {
    index = Math.round((top + bottom) / 2);

    if (list[index] > number) {
      bottom = index - 1;
    }
    if (list[index] < number) {
      top = index + 1;
    }
    if (list[index] === number) {
      return index;
    }
  }
  return index;
}

console.log(binarySearch(26, numbers));

module.exports = binarySearch;
