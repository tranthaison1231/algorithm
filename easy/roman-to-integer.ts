import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// https://leetcode.com/problems/roman-to-integer/

function romanToInt(roman: string): number {
  const romanNumeralMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const value = romanNumeralMap[roman[i]];
    if (value >= prevValue) {
      result += value;
    } else {
      result -= value;
    }
    prevValue = value;
  }

  return result;
}

Deno.test('romanToInt returns correct values for complex Roman numerals', () => {
  assertEquals(romanToInt('III'), 3);
  assertEquals(romanToInt('VI'), 6);
  assertEquals(romanToInt('XVII'), 17);
  assertEquals(romanToInt('LXVIII'), 68);
  assertEquals(romanToInt('DCCXXXVII'), 737);
  assertEquals(romanToInt('MCMXCIV'), 1994);
});
