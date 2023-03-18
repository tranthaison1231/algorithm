import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
import { isIsomorphic } from './main.ts';

Deno.test('isIsomorphic should return true if two strings are isomorphic, and false otherwise', () => {
  assertEquals(isIsomorphic('egg', 'add'), true);
  assertEquals(isIsomorphic('foo', 'bar'), false);
  assertEquals(isIsomorphic('paper', 'title'), true);
  assertEquals(isIsomorphic('', ''), true);
  assertEquals(isIsomorphic('ab', 'aa'), false);
});
