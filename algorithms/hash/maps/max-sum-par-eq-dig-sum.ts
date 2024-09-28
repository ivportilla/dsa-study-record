/*
  You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].
  Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.
 */

/*
  TC: O(n)
  SC: O(n)
 */
export function maximumSum(nums: number[]): number {
  const sumMap = new Map<number, number>();
  let ans = -1;

  const digitsSum = (target: number): number => {
    let current = target;
    let result = 0;

    while (current > 0) {
      result += current % 10;
      current = Math.floor(current / 10);
    }

    return result;
  }

  for (let i = 0; i < nums.length; i++) {
    const digSum = digitsSum(nums[i]);
    if (sumMap.has(digSum)) {
      const current = sumMap.get(digSum)!;
      ans = Math.max(ans, current + nums[i]);

      if (nums[i] > current) {
        sumMap.set(digSum, nums[i]);
      }
    } else {
      sumMap.set(digSum, nums[i]);
    }
  }

  return ans;
}
