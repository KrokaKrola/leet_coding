// var lengthOfLastWord = function (s) {
//   const words = s.trim().split(" ");
//   return words[words.length - 1].length;
// };

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLastWord = function (s) {
//   let trimmedString = "";
//   const words = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === " " && i === 0) {
//       continue;
//     }
//     if (s[i] === " " && i === s.length - 1) {
//       continue;
//     }
//     if (s[i] === " " && s[i + 1] === " ") {
//       continue;
//     }
//     trimmedString += s[i];
//   }

//   let from = 0;
//   trimmedString += " ";

//   for (let i = 0; i < trimmedString.length; i++) {
//     if (trimmedString[i] === " ") {
//       words.push(trimmedString.substring(from, i));
//       from = i + 1;
//     }
//   }

//   return words[words.length - 1] && words[words.length - 1].length;
// };

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && count > 0) {
      return count;
    }
    if (s[i] !== " ") {
      count++;
    }
  }

  return count;
};

module.exports = lengthOfLastWord;
