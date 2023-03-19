// Link: https://leetcode.com/problems/climbing-stairs/
import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';

function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let a = 1;
  let b = 2;
  for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

Deno.test('climbStairs should return the correct number of ways to climb stairs', () => {
  assertEquals(climbStairs(1), 1);
  assertEquals(climbStairs(2), 2);
  assertEquals(climbStairs(3), 3);
  assertEquals(climbStairs(4), 5);
  assertEquals(climbStairs(5), 8);
});
