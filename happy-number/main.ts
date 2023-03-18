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
