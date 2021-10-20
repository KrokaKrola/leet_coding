/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim() + " ";
  const words = [];
  let newStr = "";
  let from = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== " " && s[i + 1] === " ") {
      words.push(s.slice(from, i + 1));
      from = i + 1;
    }
    if (s[i] === " ") {
      from += 1;
    }
  }

  for (let i = words.length - 1; i >= 0; i--) {
    newStr += words[i] + (i === 0 ? "" : " ");
  }

  return newStr;
};

module.exports = reverseWords;
