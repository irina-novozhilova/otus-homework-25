import { sum } from "./sum";

describe("sum", () => {
  it("is a function", () => {
    expect(sum).toBeInstanceOf(Function);
  });

  it("sum() is 0", () => {
    expect(sum().toString()).toStrictEqual("0");
  });

  it("s(1) is 1", () => {
    const s = sum();
    expect(s(1).toString()).toStrictEqual("1");
  });

  it("s(1)(2) is 3", () => {
    const s = sum();
    expect(s(1)(2).toString()).toStrictEqual("3");
  });

  it("s(3)(4)(5) is 12", () => {
    const s = sum();
    expect(s(3)(4)(5).toString()).toStrictEqual("12");
  });

  it("s3(5) is 8", () => {
    const s3 = sum(3);
    expect(s3(5).toString()).toStrictEqual("8");
  });

  it("s3(6) is 9", () => {
    const s3 = sum(3);
    expect(s3(6).toString()).toStrictEqual("9");
  });
});
