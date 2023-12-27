import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';

function daysBetweenDates(date1: string, date2: string): number {
  const time1 = new Date(date1);
  const time2 = new Date(date2);

  const differenceTime = Math.abs(time1.getTime() - time2.getTime());
  const differenceDay = differenceTime / (1000 * 3600 * 24);

  return differenceDay;
}

Deno.test('daysBetweenDates return correct number of days', () => {
  assertEquals(daysBetweenDates('2019-06-29', '2019-06-30'), 1);
  assertEquals(daysBetweenDates('2020-01-15', '2019-12-31'), 15);
});
