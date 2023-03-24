import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

export function birthdayCakeCandles(candles: number[]): number {
  const max = Math.max(...candles);
  const total = candles.reduce((prev, cur) => {
    if (cur === max) {
      prev++;
    }
    return prev;
  }, 0);
  return total;
}

Deno.test('Test birthdayCakeCandles', () => {
  assertEquals(birthdayCakeCandles([1, 2, 3, 4]), 1);
  assertEquals(birthdayCakeCandles([4, 4, 1, 3]), 2);
  assertEquals(birthdayCakeCandles([5, 5, 5, 5]), 4);
});
