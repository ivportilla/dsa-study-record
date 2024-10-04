/*
  Isomorphic String

  Given two strings s and t, determine if they are isomorphic.
  Two strings s and t are isomorphic if the characters in s can be replaced to get t.
  All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

  https://leetcode.com/problems/isomorphic-strings/description/
 */

/*
  TC: O(n)
  SC: O(n)
 */
export function isIsomorphic(s: string, t: string): boolean {
  const n = s.length;
  const mapping = new Map<string, string>();
  const setUsed = new Set<string>();

  for (let i = 0; i < n; i++) {
    if (!mapping.has(s[i]) && !setUsed.has(t[i])) {
      mapping.set(s[i], t[i]);
      setUsed.add(t[i]);
    } else {
      if (mapping.get(s[i]) !== t[i]) {
        return false;
      }
    }
  }

  return true;
}

export function isIsomorphic2(s: string, t: string): boolean {
  const n = s.length;
  const mappingS = new Map<string, string>();
  const mappingT = new Map<string, string>();

  for (let i = 0; i < n; i++) {
    if (!mappingS.has(s[i]) && !mappingT.has(t[i])) {
      mappingS.set(s[i], t[i]);
      mappingT.set(t[i], s[i]);
    } else {
      if (mappingS.get(s[i]) !== t[i] || mappingT.get(t[i]) !== s[i]) {
        return false;
      }
    }
  }

  return true;
}
