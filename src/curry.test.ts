import { curry } from "./curry";

describe("curry", () => {
  const func = (a: number, b: number, c: number, d: number, e: number) =>
    a + b + c + d + e;
  const hof = curry(func);

  it("is a function", () => {
    expect(curry).toBeInstanceOf(Function);
  });

  it("sum 1,2,3,4,5 is 15", () => {
    expect(hof(1, 2, 3, 4, 5)).toStrictEqual(15);
  });

  it("sum ((2, 3, 4)(5, 6)) is 20", () => {
    expect(hof(2, 3, 4)(5, 6)).toStrictEqual(20);
  });

  it("sum ((3, 4)(5, 6)(7)) is 25", () => {
    expect(hof(3, 4)(5, 6)(7)).toStrictEqual(25);
  });

  it("sum ((4, 5)(6)(7, 8)) is 30", () => {
    expect(hof(4, 5)(6)(7, 8)).toStrictEqual(30);
  });

  it("sum ((5)(6)(7)(8)(9)) is 35", () => {
    expect(hof(5)(6)(7)(8)(9)).toStrictEqual(35);
  });
});
