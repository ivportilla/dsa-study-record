/*
  You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array
  Return the sum of all the unique elements of nums.

  https://leetcode.com/problems/sum-of-unique-elements/description/
 */

/*
  TC: O(n)
  SC: O(n)
 */
export function sumOfUnique(nums: number[]): number {
  const countMap = new Map<number, number>();
  let ans = 0;

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) ?? 0) + 1);
  }

  for (const [num, c] of countMap) {
    if (c == 1) {
      ans += num;
    }
  }

  return ans;
}
