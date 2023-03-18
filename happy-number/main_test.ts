import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { isHappy, sumOfSquares } from './main.ts';

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
