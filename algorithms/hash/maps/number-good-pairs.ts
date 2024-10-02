/*
  Number of Good Pairs

  Given an array of integers nums, return the number of good pairs.
  A pair (i, j) is called good if nums[i] == nums[j] and i < j.

  https://leetcode.com/problems/number-of-good-pairs/description/
 */

/*
  TC: O(n)
  SC: O(n)
 */
export function numIdenticalPairs(nums: number[]): number {
  let mapNumIdx = new Map<number, number>();
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    if (mapNumIdx.has(nums[i])) {
      const target = mapNumIdx.get(nums[i])!
      ans += target;
      mapNumIdx.set(nums[i], target + 1);
    } else {
      mapNumIdx.set(nums[i], 1);
    }
  }
  return ans;
}
