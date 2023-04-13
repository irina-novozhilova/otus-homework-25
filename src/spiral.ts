export function transform(matrix: number[][]): number[][] {
  const result: number[][] = [];
  if (matrix[0]) {
    for (let j: number = matrix[0].length - 1; j >= 0; j -= 1) {
      const row: number[] = [];
      for (let i = 0; i < matrix.length; i += 1) {
        row.push(matrix[i][j]);
      }
      result.push(row);
    }
  }
  return result;
}

export function spiral(matrix: number[][]): number[] {
  let currentMatrix: number[][] = matrix;
  let result: number[] = [];
  do {
    result = [...result, ...currentMatrix[0]];
    currentMatrix.shift();
    if (currentMatrix) {
      currentMatrix = transform(currentMatrix);
    }
  } while (currentMatrix[0]);
  return result;
}
