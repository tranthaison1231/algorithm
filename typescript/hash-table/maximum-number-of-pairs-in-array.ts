// Source: https://leetcode.com/problems/maximum-number-of-pairs-in-an-array/

function numberOfPairs(nums: number[]): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let totalPairs = 0;
  let totalLeft = 0;
  for (const [_key, value] of map.entries()) {
    totalPairs += Math.floor(value / 2);
  }

  totalLeft = nums.length - totalPairs * 2;

  return [totalPairs, totalLeft];
}
