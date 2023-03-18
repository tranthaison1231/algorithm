// Link: https://leetcode.com/problems/climbing-stairs/

export function climbStairs(n: number): number {
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
