/*
  Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
  A subarray is a contiguous non-empty sequence of elements within an array.
 */

/*
  TC: O(n)
  SC: O(n)
 */
export function subarraySum(nums: number[], k: number): number {
  const prefixSumHash = new Map<number, number>([[0, 1]]);
  let ans = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (prefixSumHash.has(sum - k)) {
      ans += prefixSumHash.get(sum - k)!
    }
    prefixSumHash.set(sum, (prefixSumHash.get(sum) ?? 0) + 1)
  }

  return ans;
}
