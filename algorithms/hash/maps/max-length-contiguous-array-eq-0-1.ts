/*
  Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
 */

/*
  TC: O(n)
  SC: O(n)
  Idea: Transform the initial problem into a balance problem, where finding 0 -> -1 and 1 -> 1.
  Then we store the index for the current count. If we eventually find that count again, it means that
  everything in the middle is balanced: -3, ..., -3 as the -1 + 1 will cancel out.
 */

export function findMaxLength(nums: number[]): number {
  let ans = 0;
  let count = 0;
  let countMap = new Map<number, number>([[0, -1]]);

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 0 ? -1 : 1;

    if (countMap.has(count)) {
      ans = Math.max(ans, i - countMap.get(count)!)
    } else {
      countMap.set(count, i);
    }
  }

  return ans;
}
