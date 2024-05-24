// https://leetcode.com/problems/divide-array-into-equal-pairs/description/

function divideArray(nums: number[]): boolean {
  const pairs = {};

  for (const num of nums) {
    pairs[num] = pairs[num] + 1 || 1;
  }

  for (const key in pairs) {
    if (pairs[key] % 2 !== 0) {
      return false;
    }
  }
  return true;
}
