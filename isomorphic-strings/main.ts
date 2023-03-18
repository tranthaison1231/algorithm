// https://leetcode.com/problems/isomorphic-strings/

export function isIsomorphic(s: string, t: string): boolean {
  const sToT = new Map<string, string>();
  const tToS = new Map<string, string>();
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    if (sToT.has(sChar)) {
      if (sToT.get(sChar) !== tChar) {
        return false;
      }
    } else {
      sToT.set(sChar, tChar);
    }
    if (tToS.has(tChar)) {
      if (tToS.get(tChar) !== sChar) {
        return false;
      }
    } else {
      tToS.set(tChar, sChar);
    }
  }
  return true;
}
