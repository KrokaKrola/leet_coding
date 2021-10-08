// const romans = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function (s) {
//   const reverted = s.split("").reverse();
//   let result = 0;

//   for (let i = 0; i < reverted.length; ) {
//     if (reverted[i] === "I" && reverted[i + 1] === "I") {
//       result += 2;
//       i += 2;
//       continue;
//     }

//     if (reverted[i] === "V" && reverted[i + 1] === "I") {
//       result += 4;
//       i += 2;
//       continue;
//     }

//     if (reverted[i] === "X" && reverted[i + 1] === "I") {
//       result += 9;
//       i += 2;
//       continue;
//     }

//     if (reverted[i] === "L" && reverted[i + 1] === "X") {
//       result += 40;
//       i += 2;
//       continue;
//     }

//     if (reverted[i] === "C" && reverted[i + 1] === "X") {
//       result += 90;
//       i += 2;
//       continue;
//     }

//     if (reverted[i] === "D" && reverted[i + 1] === "C") {
//       result += 400;
//       i += 2;
//       continue;
//     }

//     if (reverted[i] === "M" && reverted[i + 1] === "C") {
//       result += 900;
//       i += 2;
//       continue;
//     }

//     result += romans[reverted[i]];
//     i++;
//   }

//   return result;
// };

// const result = romanToInt("MCMXCIV");

// result;

const romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

var romanToInt = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf("IV") > -1) {
      s = s.replace("IV", "");
      result += romans["IV"];
    }

    if (s.indexOf("IX") > -1) {
      s = s.replace("IX", "");
      result += romans["IX"];
    }

    if (s.indexOf("XL") > -1) {
      s = s.replace("XL", "");
      result += romans["XL"];
    }

    if (s.indexOf("XC") > -1) {
      s = s.replace("XC", "");
      result += romans["XC"];
    }

    if (s.indexOf("CD") > -1) {
      s = s.replace("CD", "");
      result += romans["CD"];
    }

    if (s.indexOf("CM") > -1) {
      s = s.replace("CM", "");
      result += romans["CM"];
    }
  }

  for (let i = 0; i < s.length; i++) {
    result += romans[s[i]];
  }

  return result;
};

const result = romanToInt("IVIIIIV");
result;
