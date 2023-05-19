import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';

function isPrime(n: number): boolean {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function diagonalPrime(nums: number[][]): number {
  let maxPrice = 0;
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i][i]) && nums[i][i] > maxPrice) {
      maxPrice = nums[i][i];
    }
    if (isPrime(nums[i][nums.length - i - 1]) && nums[i][nums.length - i - 1] > maxPrice) {
      maxPrice = nums[i][nums.length - i - 1];
    }
  }
  return maxPrice;
}

Deno.test('diagonalPrime should return the max prime number in the diagonal', () => {
  assertEquals(
    diagonalPrime([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
    7
  );
  assertEquals(
    diagonalPrime([
      [1, 2, 3, 4],
      [4, 5, 6, 4],
      [7, 8, 9, 4],
      [7, 8, 9, 4],
    ]),
    7
  );
});
