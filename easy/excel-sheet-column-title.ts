import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// https://leetcode.com/problems/excel-sheet-column-title/

function convertToTitle(columnNumber: number): string {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let answer = '';
  let reminder;

  while (columnNumber > 0) {
    columnNumber -= 1;
    reminder = columnNumber % 26;
    answer += alphabets[reminder];
    columnNumber = Math.floor(columnNumber / 26);
  }

  return answer.split('').reverse().join('');
}

Deno.test('convertToTitle return correct string text', () => {
  assertEquals(convertToTitle(1), 'A');
  assertEquals(convertToTitle(28), 'AB');
  assertEquals(convertToTitle(701), 'ZY');
});
