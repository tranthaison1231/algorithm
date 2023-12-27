import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// https://leetcode.com/problems/last-stone-weight/

function lastStoneWeight(stones: number[]): number {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    const y = stones.shift()!;
    const x = stones.shift()!;
    if (x !== y) {
      stones.push(y - x);
    }
  }
  return stones[0] || 0;
}
lastStoneWeight([2, 7, 4, 1, 8, 1]);

Deno.test('lastStoneWeight should return the weight of the last stone', () => {
  assertEquals(lastStoneWeight([2, 7, 4, 1, 8, 1]), 1);
  assertEquals(lastStoneWeight([2, 2]), 0);
  assertEquals(lastStoneWeight([1, 3]), 2);
});
