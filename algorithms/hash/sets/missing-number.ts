/*
  Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
  Time Complexity: O(n)
  Space Complexity: O(n)
 */
export function missingNumber(nums: number[]): number {
  const numsSet = new Set(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (!numsSet.has(i)) {
      return i;
    }
  }

  return -1;
}

/*
  Implementation 2
  Time Complexity: O(n)
  Space Complexity: O(1)
 */
export function missingNumber2(nums: number[]): number {
  let sum = nums.reduce((acc, n) => acc + n, 0);

  for (let i = 0; i <= nums.length; i++) {
    sum -= i;
  }

  return -sum;
}
