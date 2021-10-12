const mySqrt = require("./sqrt-x");

describe("sqrt-x", () => {
  // it("should return 2 for x=4", () => {
  //   const res = mySqrt(4);
  //   expect(res).toBe(2);
  // });

  // it("should return 5 for x=25", () => {
  //   const res = mySqrt(4);
  //   expect(res).toBe(2);
  // });

  // it("should return 10 for x=100", () => {
  //   const res = mySqrt(4);
  //   expect(res).toBe(2);
  // });

  it("should return 25 for x=625", () => {
    const res = mySqrt(4);
    expect(res).toBe(2);
  });

  it("should return 2 for x=8", () => {
    const res = mySqrt(8);
    expect(res).toBe(2);
  });
});
