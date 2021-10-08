/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs[0]) {
    return "";
  }

  let prefixSymboxIndex = 0;
  let prefix = "";
  let strings = [...strs];

  while (strings.length === strs.length) {
    if (!strings[0][prefixSymboxIndex]) {
      break;
    }

    const newArray = [];

    for (let i = 0; i < strings.length; i++) {
      if (strings[i].startsWith(prefix + strings[0][prefixSymboxIndex])) {
        newArray.push(strings[i]);
      }
    }

    if (strs.length !== newArray.length) {
      break;
    }

    strings = newArray;
    prefix += strings[0][prefixSymboxIndex];
    prefixSymboxIndex += 1;
  }

  return prefix;
};

const res1 = longestCommonPrefix(["flower", "flow", "flight"]);
res1;

const res2 = longestCommonPrefix(["a"]);
res2;

const res3 = longestCommonPrefix([""]);
res3;

const res4 = longestCommonPrefix(["ab", "a"]);
res4;

const res5 = longestCommonPrefix(["flower", "flower", "flower"]);
res5;
