import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// https://leetcode.com/problems/valid-anagram/

export function isAnagram(s: string, t: string): boolean {
  const sSorted = s.split('').sort();
  const tSorted = t.split('').sort();
  return sSorted.join('') === tSorted.join('');
}

Deno.test('isAnagram returns true for valid anagrams', () => {
  assertEquals(isAnagram('listen', 'silent'), true);
  assertEquals(isAnagram('debit card', 'bad credit'), true);
});

Deno.test('isAnagram returns false for invalid anagrams', () => {
  assertEquals(isAnagram('listen', 'talk'), false);
  assertEquals(isAnagram('debit card', 'credit card'), false);
});
