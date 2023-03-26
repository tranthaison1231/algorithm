import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// https://leetcode.com/problems/find-pivot-index/

function pivotIndex(nums: number[]): number {
  const totalSum = nums.reduce((total, cur) => total + cur, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (totalSum - leftSum - nums[i] === leftSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
}

Deno.test('pivotIndex should return the index of the pivot', () => {
  assertEquals(pivotIndex([1, 7, 3, 6, 5, 6]), 3);
  assertEquals(pivotIndex([1, 2, 3]), -1);
  assertEquals(pivotIndex([2, 1, -1]), 0);
});
