/*
  Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
  Return the largest lucky integer in the array. If there is no lucky integer return -1.

  https://leetcode.com/problems/find-lucky-integer-in-an-array/description/
 */

/*
  TC: O(n)
  SC: O(n)
 */
function findLucky(arr: number[]): number {
  const mapFreq = new Map<number, number>();

  for (const num of arr) {
    mapFreq.set(num, (mapFreq.get(num) ?? 0) + 1);
  }

  let ans = -1;
  for (const [num, freq] of mapFreq) {
    if (num === freq) {
      ans = Math.max(ans, num);
    }
  }

  return ans;
}
