/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const firstNumber = a.split("").reverse();
  const secondNumber = b.split("").reverse();
  const length =
    firstNumber.length > secondNumber.length
      ? firstNumber.length
      : secondNumber.length;

  let add = 0;
  const result = [];

  for (let i = 0; i < length; i++) {
    let summ = (+firstNumber[i] || 0) + (+secondNumber[i] || 0) + add;

    if (summ === 3) {
      result.push("1");
      add = 1;
    }
    if (summ === 2) {
      result.push("0");
      add = 1;
    }
    if (summ === 1) {
      result.push("1");
      add = 0;
    }
    if (summ === 0) {
      result.push("0");
      add = 0;
    }
  }

  return (add || "") + result.reverse().join("");
};

module.exports = addBinary;
