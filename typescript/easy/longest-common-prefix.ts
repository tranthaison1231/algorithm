import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(str: string[]): string {
  let i = 0;
  if (!str.length) return '';
  while (true) {
    const char = str[0][i] || '';
    const match = str.every((str) => str[i] === char);
    if (match) {
      i += 1;
    } else {
      break;
    }
  }
  return str[0].slice(0, i);
}

Deno.test('longestCommonPrefix should return the correct prefix', () => {
  const words = ['flower', 'flow', 'flight'];
  const expected = 'fl';
  const result = longestCommonPrefix(words);
  assertEquals(result, expected);
});

Deno.test('longestCommonPrefix should return an empty string for empty input', () => {
  const words: string[] = [];
  const expected = '';
  const result = longestCommonPrefix(words);
  assertEquals(result, expected);
});

Deno.test('longestCommonPrefix should return an empty string for no common prefix', () => {
  const words = ['dog', 'race', 'car'];
  const expected = '';
  const result = longestCommonPrefix(words);
  assertEquals(result, expected);
});

Deno.test('longestCommonPrefix should handle single-word input', () => {
  const words = ['example'];
  const expected = 'example';
  const result = longestCommonPrefix(words);
  assertEquals(result, expected);
});
