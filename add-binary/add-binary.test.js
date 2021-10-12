const addBinary = require("./add-binary");

describe("add binary", () => {
  it("should return 100 for a=11 & b=1", () => {
    const res = addBinary("11", "111");
    expect(res).toBe("1010");
  });
  it("should return 10101 for a=1010 & b=1011", () => {
    const res = addBinary("1010", "1011");
    expect(res).toBe("10101");
  });
  it("should return 0 for a=0 & b=0", () => {
    const res = addBinary("0", "0");
    expect(res).toBe("0");
  });
  it("should return 111 for a=0 & b=111", () => {
    const res = addBinary("0", "111");
    expect(res).toBe("111");
  });
});
