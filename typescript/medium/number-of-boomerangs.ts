function getDis(p1: number[], p2: number[]) {
  return (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2;
}

function numberOfBoomerangs(points: number[][]): number {
  let res = 0;
  for (let i = 0; i < points.length; i++) {
    const map = new Map<number, number>();
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      const dis = getDis(points[i], points[j]);
      map.set(dis, (map.get(dis) || 0) + 1);
    }
    for (const v of map.values()) {
      res += v * (v - 1);
    }
  }
  return res;
}
