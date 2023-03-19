import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// https://leetcode.com/problems/length-of-last-word/

export function lengthOfLastWord(s: string): number {
  const words = s.split(' ');
  const lastWord = words[words.length - 1];
  return lastWord.length;
}

Deno.test('lengthOfLastWord should return the length of the last word in the input string', () => {
  assertEquals(lengthOfLastWord('hello world'), 5);
  assertEquals(lengthOfLastWord('foo bar baz'), 3);
  assertEquals(lengthOfLastWord('  '), 0);
  assertEquals(lengthOfLastWord(''), 0);
});
