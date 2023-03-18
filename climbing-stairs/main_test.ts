import { assertEquals } from 'https://deno.land/std@0.159.0/testing/asserts.ts';
import { climbStairs } from './main.ts';

Deno.test('climbStairs should return the correct number of ways to climb stairs', () => {
  assertEquals(climbStairs(1), 1);
  assertEquals(climbStairs(2), 2);
  assertEquals(climbStairs(3), 3);
  assertEquals(climbStairs(4), 5);
  assertEquals(climbStairs(5), 8);
});
