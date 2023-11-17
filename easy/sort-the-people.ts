export function sortPeople(names: string[], heights: number[]): string[] {
  return names
    .map((name, index) => ({ name, height: heights[index] }))
    .sort((a, b) => b.height - a.height)
    .map((person) => person.name);
}
