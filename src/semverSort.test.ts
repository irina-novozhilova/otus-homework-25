import semverSort from "./semverSort";

describe("semverSort", () => {
  let semver = new semverSort();
  let inputData: string[] = [
    "1.0.5",
    "2.5.0",
    "0.12.0",
    "1",
    "1.23.45",
    "1.4.50",
    "1.2.3.4.5.6.7.8",
  ];
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("is a function", () => {
    expect(semverSort).toBeInstanceOf(Function);
  });

  it("converted data is array ", function () {
    expect(semver.convertInputVersionsToArray(inputData)[0]).toStrictEqual([
      "1",
      "0",
      "5",
    ]);
    expect(semver.convertInputVersionsToArray(inputData).length).toStrictEqual(
      7
    );
  });

  it("maxlength of array ", function () {
    const versions = semver.convertInputVersionsToArray(inputData);
    expect(semver.getMaxLength(versions)).toStrictEqual(8);
  });

  it("sort array versions", function () {
    const versions = semver.convertInputVersionsToArray(inputData);
    const sortedVersion = semver.sortVersions(versions);
    expect(sortedVersion).toStrictEqual([
      ["0", "12", "0"],
      ["1"],
      ["1", "0", "5"],
      ["1", "2", "3", "4", "5", "6", "7", "8"],
      ["1", "4", "50"],
      ["1", "23", "45"],
      ["2", "5", "0"],
    ]);
  });
});
