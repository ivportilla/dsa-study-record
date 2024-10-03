/*
  Binary Sub Arrays With Sum

  Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
  A subarray is a contiguous part of the array.

  https://leetcode.com/problems/binary-subarrays-with-sum/description/
 */

/*
  TC: O(n)
  SC: O(n)
 */
export function numSubarraysWithSum(nums: number[], goal: number): number {
  let ans = 0;
  const prefixSum = new Map<number, number>([[0, 1]]);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (prefixSum.has(sum - goal)) {
      const toAdd = prefixSum.get(sum - goal)!;
      ans += toAdd
    }

    prefixSum.set(sum, (prefixSum.get(sum) ?? 0) + 1);
  }

  return ans;
}
