/*
  Permutation in String

  Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
  In other words, return true if one of s1's permutations is the substring of s2.

  https://leetcode.com/problems/permutation-in-string/description/
 */

/*
  TC: O(n)
  SC: O(n)
 */
function checkInclusion(s1: string, s2: string): boolean {
  const freqS1 = Array(26).fill(0);
  const currentFreq = Array(26).fill(0);
  const k = s1.length;
  const n = s2.length;

  const getLetterPos = (c: string) => c.charCodeAt(0) - 97;
  const checkEq = (a1: number[], a2: number[]) => {
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) {
        return false;
      }
    }
    return true;
  }

  if (s2.length < s1.length) {
    return false;
  }

  for (let i = 0; i < k; i++) {
    freqS1[getLetterPos(s1[i])]++;
    currentFreq[getLetterPos(s2[i])]++;
  }

  if (checkEq(freqS1, currentFreq)) {
    return true;
  }

  for (let i = k; i < n; i++) {
    currentFreq[getLetterPos(s2[i])]++;
    currentFreq[getLetterPos(s2[i - k])]--;

    if (checkEq(freqS1, currentFreq)) {
      return true;
    }
  }

  return false;
}
