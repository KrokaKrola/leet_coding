/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const sanitizedString = s.replace(/[^a-zA-Z0-9]/g, "");

  let revertedString = "";

  for (let i = sanitizedString.length - 1; i >= 0; i--) {
    revertedString += sanitizedString[i];
  }

  return revertedString.toLowerCase() === sanitizedString.toLowerCase();
};

console.log(isPalindrome("0P"));
