/*
  You are given an array nums consisting of positive integers.
  Return the total frequencies of elements in nums such that those elements all have the maximum frequency.
  The frequency of an element is the number of occurrences of that element in the array.

  https://leetcode.com/problems/count-elements-with-maximum-frequency/description/
 */

/*
  TC: O(n)
  SC: O(n)
 */
export function maxFrequencyElements(nums: number[]): number {
  const mapFreq = new Map<number, number>();
  let maxFreq = 0;
  let countFreq = 0;

  for (const num of nums) {
    const newFreq = (mapFreq.get(num) ?? 0) + 1;
    mapFreq.set(num, newFreq);

    if (newFreq > maxFreq) {
      countFreq = 1;
      maxFreq = newFreq;
    } else if (newFreq === maxFreq){
      countFreq++;
    }
  }

  return countFreq * maxFreq;
}
