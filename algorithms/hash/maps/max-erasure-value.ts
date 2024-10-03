/*
  Maximum Erasure Value

  You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

  Return the maximum score you can get by erasing exactly one subarray.

  An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

  https://leetcode.com/problems/maximum-erasure-value/description/
 */

/*
  TC: O(n)
  SC: O(n)
  Note: This problem can be translated to: find the max sum of a subarray composed by unique elements
 */
export function maximumUniqueSubarray(nums: number[]): number {
  let ans = 0;
  const subFreq = new Map<number, number>();

  let left = 0;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]
    subFreq.set(nums[right], (subFreq.get(nums[right]) ?? 0) + 1);

    while (subFreq.get(nums[right])! > 1) {
      sum -= nums[left];
      const leftFreq = subFreq.get(nums[left]) ?? 0
      subFreq.set(nums[left], leftFreq === 0 ? 0 : leftFreq - 1);
      left++;
    }
    ans = Math.max(ans, sum);
  }

  return ans;
}
