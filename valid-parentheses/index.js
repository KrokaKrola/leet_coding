/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack = [];

  for (let c of s) {
    if (c === "(") {
      stack.push(")");
    } else if (c === "{") {
      stack.push("}");
    } else if (c === "[") {
      stack.push("]");
    } else if (stack.length === 0 || stack.pop() !== c) {
      return false;
    }
  }
  return stack.length === 0;
};

const res1 = isValid("()");
res1;

const res2 = isValid("()[]{}");
res2;

const res3 = isValid("(]");
res3;

const res4 = isValid("([)]");
res4;

const res5 = isValid("{[]}");
res5;

module.exports = isValid;
