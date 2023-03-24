import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

export function miniMaxSum(arr: number[]): [number, number] {
  const sumArr = [];
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum += arr[j];
      }
    }
    sumArr.push(sum);
    if (sum < min) min = sum;
    if (sum > max) max = sum;
  }
  return [min, max];
}

Deno.test('miniMaxSum returns correct minimum and maximum sums for given array', () => {
  assertEquals(miniMaxSum([1, 2, 3, 4, 5]), [10, 14]);
});
