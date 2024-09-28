/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.

  TC: O(n)
  SC: O(n)
 */
export function twoSum(nums: number[], target: number): number[] {
  const hashMap: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const valueToCheck = target - nums[i];
    if (hashMap.has(valueToCheck)) {
      return [hashMap.get(valueToCheck)!, i];
    } else {
      hashMap.set(nums[i], i);
    }
  }

  return [-1, -1]
}
