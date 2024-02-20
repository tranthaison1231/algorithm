function countBits(n: number): number[] {
  let res: number[] = []

  for (let i = 0; i <= n; i++) {
    const binary = i.toString(2)
    res.push(binary.split('').filter((x) => x === '1').length)
  }

  return res;
};
