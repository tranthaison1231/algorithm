import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// https://leetcode.com/problems/1-bit-and-2-bit-characters/

function isOneBitCharacter(bits: number[]): boolean {
  let i = 0;
  while (i < bits.length - 1) {
    i += bits[i] + 1;
  }
  return i === bits.length - 1;
}

Deno.test('Test isOneBitCharacter', () => {
  assertEquals(isOneBitCharacter([1, 0, 0]), true);
  assertEquals(isOneBitCharacter([1, 1, 1, 0]), false);
  assertEquals(isOneBitCharacter([1, 1, 1, 1, 1, 1, 1, 0]), false);
  assertEquals(isOneBitCharacter([1, 1, 1, 1, 1, 1, 1, 1, 0]), true);
});
