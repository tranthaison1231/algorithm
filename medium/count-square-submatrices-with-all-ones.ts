import { assertEquals } from "https://deno.land/std@0.180.0/testing/asserts.ts";
// https://leetcode.com/problems/count-square-submatrices-with-all-ones/

export function countSquares(matrix: number[][]): number {
  let res = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0 && i > 0 && j > 0) {
        matrix[i][j] =
          Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]) +
          1;
      }
      res += matrix[i][j];
    }
  }
  return res;
}

Deno.test("count square submatrices with all ones", () => {
  assertEquals(
    countSquares([
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 1, 1, 1],
    ]),
    15
  );
  assertEquals(
    countSquares([
      [0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1],
    ]),
    21
  );
  assertEquals(
    countSquares([
      [1, 0, 1],
      [1, 1, 0],
      [1, 1, 0],
    ]),
    7
  );
});
