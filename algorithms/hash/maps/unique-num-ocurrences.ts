/*
  Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

  https://leetcode.com/problems/unique-number-of-occurrences/description/
 */

/*
  TC: O(n)
  SC: O(n)
 */
export function uniqueOccurrences(arr: number[]): boolean {
  const mapFreq = new Map<number, number>();

  for (const num of arr) {
    mapFreq.set(num, (mapFreq.get(num) ?? 0) + 1);
  }

  const freqSet = new Set<number>();
  for (const [_, freq] of mapFreq) {
    if (freqSet.has(freq)) {
      return false;
    } else {
      freqSet.add(freq);
    }
  }

  return true;
}
