export default class semverSort {
  constructor() {}

  convertInputVersionsToArray(inputVersions: string[]): string[][] {
    let versions: string[][] = [];
    for (let i: number = 0; i <= inputVersions.length - 1; i = i + 1) {
      versions.push(inputVersions[i].split("."));
    }
    return versions;
  }

  getMaxLength(versions: string[][]): number {
    let maxLength: number = 0;
    for (let i: number = 0; i <= versions.length - 1; i = i + 1) {
      if (versions[i].length > maxLength) {
        maxLength = versions[i].length;
      }
    }
    return maxLength;
  }

  sortVersions(versions: string[][]): any {
    let sortedVersions: string[][] = [];
    let currentVersions: string[][] = versions;
    let minimalIndex: number = 0;
    let minEl: number = 0;
    let curEl: number = 0;
    let minimalVersion: string[] = [];
    while (currentVersions[0]) {
      minimalVersion = currentVersions[0];
      minimalIndex = 0;
      for (let i: number = 1; i <= currentVersions.length - 1; i = i + 1) {
        for (
          let el: number = 0;
          el < this.getMaxLength(currentVersions);
          el = el + 1
        ) {
          minEl = minimalVersion[el] ? +minimalVersion[el] : 0;
          curEl = currentVersions[i][el] ? +currentVersions[i][el] : 0;
          if (minEl > curEl) {
            minimalVersion = currentVersions[i];
            minimalIndex = i;
            break;
          } else if (minEl < curEl) {
            break;
          }
        }
      }
      currentVersions.splice(minimalIndex, 1);
      sortedVersions.push(minimalVersion);
    }

    return sortedVersions;
  }
}
