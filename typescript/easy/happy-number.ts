import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// https://leetcode.com/problems/happy-number/

export function sumOfSquares(n: number): number {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

export function isHappy(n: number): boolean {
  const set = new Set();
  while (n !== 1) {
    if (set.has(n)) return false;
    set.add(n);
    n = sumOfSquares(n);
  }
  return true;
}

Deno.test('sumOfSquares should return the correct sum of squares of digits', () => {
  assertEquals(sumOfSquares(19), 82);
  assertEquals(sumOfSquares(1234), 30);
  assertEquals(sumOfSquares(7), 49);
});

Deno.test('isHappy should return true for happy numbers and false for unhappy numbers', () => {
  assertEquals(isHappy(19), true);
  assertEquals(isHappy(7), true);
  assertEquals(isHappy(4), false);
  assertEquals(isHappy(123), false);
});
