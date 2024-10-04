/*
  Determine if Two Strings Are Close

  Two strings are considered close if you can attain one from the other using the following operations:

    Operation 1: Swap any two existing characters.
        For example, abcde -> aecdb
    Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
        For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)

  You can use the operations on either string as many times as necessary.

  Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

  https://leetcode.com/problems/determine-if-two-strings-are-close/description/
 */

/*
  TC: O(n)
  SC: O(n)
 */
export function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }

  const n = word1.length;
  const nLetters = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  const c1 = Array(nLetters).fill(0);
  const c2 = Array(nLetters).fill(0);

  const charToIdx = (c: string) => c.charCodeAt(0) - 'a'.charCodeAt(0);

  // Count frequencies
  for (let i = 0; i < n; i++) {
    c1[charToIdx(word1[i])]++;
    c2[charToIdx(word2[i])]++;
  }

  // Check keys
  for (let i = 0; i < nLetters; i++) {
    if ((c1[i] === 0 && c2[i] !== 0) || (c1[i] !== 0 && c2[i] === 0)) {
      return false;
    }
  }

  // This is constant because c1.size and c2.size == 26
  c1.sort();
  c2.sort();

  for (let i = 0; i < nLetters; i++) {
    if (c1[i] !== c2[i]) {
      return false;
    }
  }

  return true;
}
