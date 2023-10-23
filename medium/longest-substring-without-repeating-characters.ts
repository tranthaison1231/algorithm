import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  const substrings: string[] = [];
  let longest = 0;

  for (const char of s) {
    const charIndex = substrings.indexOf(char);
    if (substrings.includes(char)) {
      substrings.splice(0, charIndex + 1);
    }
    substrings.push(char);
    longest = Math.max(longest, substrings.length);
  }
  return longest;
}

Deno.test('lengthOfLongestSubstring', () => {
  assertEquals(lengthOfLongestSubstring('abcdcefghi'), 7);
  assertEquals(lengthOfLongestSubstring('bbbbb'), 1);
});
