/*
  In order to find the recurrence relation, we have to find the bases cases.
  s0 = rob [] -> 0
  s1 = rob [a] -> a

  Now we need to find the sn based on the previous solutions:
  s2 = rob [a, b] -> max(s0 + b, s1)

  The relation is such because we have a constraint about not to robe two adjacent houses.
  Therefore, s2 is either s0 + b (not including s1) or s1 alone.
 */

export function rob(nums: number[]): number {
  let s0 = 0;
  let s1 = nums[0] ?? 0;

  for (let i = 1; i < nums.length; i++) {
    const current = Math.max(s0 + nums[i], s1);
    s0 = s1;
    s1 = current;
  }

  return s1;
}
