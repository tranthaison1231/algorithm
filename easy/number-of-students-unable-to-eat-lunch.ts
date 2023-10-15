import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts';

function countStudents(students: number[], sandwiches: number[]): number {
  const count: number[] = [0, 0];

  for (const student of students) {
    count[student]++;
  }

  for (const sandwich of sandwiches) {
    if (count[sandwich] > 0) {
      count[sandwich]--;
    } else {
      break;
    }
  }
  return count.reduce((sum, current) => sum + current, 0);
}

Deno.test('countStudents', () => {
  assertEquals(countStudents([1, 1, 0, 0], [0, 1, 0, 1]), 0);
  assertEquals(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]), 3);
});
