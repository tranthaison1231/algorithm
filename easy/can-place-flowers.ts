import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// https://leetcode.com/problems/can-place-flowers/

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      flowerbed[i] = 1;
      count++;
    }
  }
  return count >= n;
}

Deno.test(
  'canPlaceFlowers should return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule',
  () => {
    assertEquals(canPlaceFlowers([1, 0, 0, 0, 1], 1), true);
    assertEquals(canPlaceFlowers([1, 0, 0, 0, 1], 2), false);
    assertEquals(canPlaceFlowers([0, 0, 0, 0, 0], 2), true);
    assertEquals(canPlaceFlowers([0, 0, 0, 0, 0], 3), true);
  }
);
