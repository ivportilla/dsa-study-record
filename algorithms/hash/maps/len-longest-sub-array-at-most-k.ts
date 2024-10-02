/*
  Length of Longest Subarray With at Most K Frequency

  You are given an integer array nums and an integer k.
  The frequency of an element x is the number of times it occurs in an array.
  An array is called good if the frequency of each element in this array is less than or equal to k.

  Return the length of the longest good subarray of nums.

  A subarray is a contiguous non-empty sequence of elements within an array.

  https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/description/
 */

/*
  TC: O(n)
  SC: O(n)
 */
export function maxSubarrayLength(nums: number[], k: number): number {
  const subArrayFreq = new Map<number, number>()
  let ans = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    subArrayFreq.set(nums[right], (subArrayFreq.get(nums[right]) ?? 0) + 1);
    while (subArrayFreq.get(nums[right])! > k) {
      const currentLeftFreq = subArrayFreq.get(nums[left]) ?? 0;
      const updatedLeftFreq = currentLeftFreq === 0 ? currentLeftFreq : currentLeftFreq - 1;
      subArrayFreq.set(nums[left], updatedLeftFreq);
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}
