import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// Link: https://leetcode.com/problems/single-number/

export function singleNumber(nums: number[]): number {
  const temp = new Map<number, number>([]);
  for (let i = 0; i < nums.length; i++) {
    if (!temp.has(nums[i])) {
      temp.set(nums[i], 1);
    } else {
      temp.set(nums[i], temp.get(nums[i])! + 1);
    }
  }
  for (const [index, value] of temp) {
    if (value == 1) {
      return index;
    }
  }
  return 0;
}

singleNumber([2, 2, 2, 1]);

Deno.test('singleNumber returns correct result', () => {
  assertEquals(singleNumber([2, 2, 1]), 1);
  assertEquals(singleNumber([4, 1, 2, 1, 2]), 4);
  assertEquals(singleNumber([1]), 1);
  assertEquals(singleNumber([1, 1, 2, 3, 3]), 2);
});
