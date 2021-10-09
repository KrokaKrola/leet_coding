// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function (haystack, needle) {
//   return haystack.search(new RegExp(needle));
// };

// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);
// };

// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function (haystack, needle) {
//   if (!needle) {
//     return 0;
//   }

//   if (needle.length > haystack.length) {
//     return -1;
//   }

//   const needleLength = needle.length;
//   let j = 0;
//   let matchedSymbols = 0;

//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle[0]) {
//       while (j !== needleLength) {
//         if (haystack[i + j] === needle[j]) {
//           matchedSymbols++;
//         }
//         j++;
//       }
//       if (matchedSymbols === needleLength) {
//         return i;
//       }
//       j = 0;
//       matchedSymbols = 0;
//     }
//   }

//   return -1;
// };

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }

  if (needle.length > haystack.length) {
    return -1;
  }

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        } else if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }

  return -1;
};

module.exports = strStr;
