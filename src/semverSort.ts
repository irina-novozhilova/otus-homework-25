export default class SemverSort {
  convertInputVersionsToArray(inputVersions: string[]): string[][] {
    const versions: string[][] = [];
    for (let i = 0; i <= inputVersions.length - 1; i += 1) {
      versions.push(inputVersions[i].split("."));
    }
    return versions;
  }

  getMaxLength(versions: string[][]): number {
    let maxLength = 0;
    for (let i = 0; i <= versions.length - 1; i += 1) {
      if (versions[i].length > maxLength) {
        maxLength = versions[i].length;
      }
    }
    return maxLength;
  }

  sortVersions(versions: string[][]): string[][] {
    const sortedVersions: string[][] = [];
    const currentVersions: string[][] = versions;
    let minimalIndex = 0;
    let minEl = 0;
    let curEl = 0;
    let minimalVersion: string[] = [];
    while (currentVersions[0]) {
      minimalVersion = currentVersions[0];
      minimalIndex = 0;
      for (let i = 1; i <= currentVersions.length - 1; i += 1) {
        for (let el = 0; el < this.getMaxLength(currentVersions); el += 1) {
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
