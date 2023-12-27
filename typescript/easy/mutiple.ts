import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';

export function mutiple(x: number, y: number): number {
  let total = 0;
  let absY = Math.abs(y);
  while (absY > 0) {
    if (y > 0) {
      total += x;
    } else {
      total -= x;
    }
    absY--;
  }
  return total;
}

Deno.test('mutiple returns correct values', () => {
  assertEquals(mutiple(2, 3), 6);
  assertEquals(mutiple(5, 0), 0);
  assertEquals(mutiple(0, 5), 0);
  assertEquals(mutiple(1, 5), 5);
  assertEquals(mutiple(1, -5), -5);
  assertEquals(mutiple(-1, 5), -5);
  assertEquals(mutiple(-1, -5), 5);
});
