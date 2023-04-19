import { spiral, transform } from "./spiral";

describe("spiral", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("is a function", () => {
    expect(spiral).toBeInstanceOf(Function);
  });

  it("result is an array", () => {
    const simpleDoubleArray: number[][] = [
      [1, 2],
      [3, 4],
    ];
    const result = spiral(simpleDoubleArray);
    expect(result).toBeInstanceOf(Array);
  });

  it("result with 2 dim array is 1, 2, 4, 3", () => {
    const simpleDoubleArray: number[][] = [
      [1, 2],
      [3, 4],
    ];
    const result = spiral(simpleDoubleArray);
    expect(result).toStrictEqual([1, 2, 4, 3]);
  });

  it("matrix 3 x 4", () => {
    const simpleTripleArray: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 2, 3],
    ];
    const result = spiral(simpleTripleArray);
    expect(result).toStrictEqual([1, 2, 3, 6, 9, 3, 2, 1, 7, 4, 5, 8]);
  });

  it("matrix main", () => {
    const mainMatrix: number[][] = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
    ];
    const result = spiral(mainMatrix);
    expect(result).toStrictEqual([
      0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11,
    ]);
  });
});

describe("transform", () => {
  it("is a function", () => {
    expect(transform).toBeInstanceOf(Function);
  });

  it("result with 3 dim array is 1, 2, 3, 6, 9, 8, 7, 4, 5", () => {
    const simpleTripleArray: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 2, 3],
    ];
    const result = transform(simpleTripleArray);
    expect(result).toStrictEqual([
      [3, 6, 9, 3],
      [2, 5, 8, 2],
      [1, 4, 7, 1],
    ]);
  });
});
