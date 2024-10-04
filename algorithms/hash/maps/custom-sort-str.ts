/*
  Custom Sort String

  You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.
  Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

  Return any permutation of s that satisfies this property.

  https://leetcode.com/problems/custom-sort-string/description/
 */

/*
  TC: O(n)
  SC: O(n)
  Note: This uses bucket sort
 */
function customSortString(order: string, s: string): string {
  const mapOrder = new Map<string, number>();

  for (let i = 0; i < order.length; i++) {
    mapOrder.set(order[i], i);
  }

  const bucket: string[] = new Array(order.length).fill('');

  let additional = '';
  for (let i = 0; i < s.length; i++) {
    if (mapOrder.has(s[i])) {
      const pos = mapOrder.get(s[i])!;
      bucket[pos] += s[i];
    } else {
      additional += s[i];
    }

  }
  let result = '';
  for (let i = 0; i < bucket.length; i++) {
    result += bucket[i];
  }

  return result.concat(additional);
};
