/*
  Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.
  1 <= nums[i][j] <= 1000
  All the values of nums[i] are unique.
 */

/*
  TC: O(n * m * log(n))
  SC: O(n*m)
 */
export function intersection(nums: number[][]): number[] {
  const numsFreq = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      const currentNumCount = numsFreq.get(nums[i][j]) ?? 0;
      numsFreq.set(nums[i][j], currentNumCount + 1);
    }
  }
  const result = [];
  for (const [key, val] of numsFreq) {
    if (val === nums.length) {
      result.push(key);
    }
  }

  result.sort((a, b) => a < b ? -1 : 1);

  return result;
}

/*
  Alternative with SC: O(n*m)
 */
export function intersection2(nums: number[][]): number[] {
  const MAX_NUMBERS = 1000;
  const freq = Array(MAX_NUMBERS + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      freq[nums[i][j]] = freq[nums[i][j]] + 1;
    }
  }

  const result = [];
  for (let i = 1; i <= MAX_NUMBERS; i++) {
    if (freq[i] === nums.length) {
      result.push(i);
    }
  }

  return result;
}
