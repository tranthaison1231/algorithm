// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

export function staircase(n: number) {
  for (let i = 1; i <= n; i++) {
    const blanks = [...Array(n - i)].map(() => ' ');
    const hashes = [...Array(n - (n - i))].map(() => '#');
    console.log([...blanks, ...hashes].join(''));
  }
}

// staircase(3);
// _ _ # ✅
// _ # # ✅
// # # # ✅
