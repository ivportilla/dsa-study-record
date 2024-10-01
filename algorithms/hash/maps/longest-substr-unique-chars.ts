/*
  Given a string s, find the length of the longest substring without repeating characters.
 */

/*
  TC: O(n)
  SC: O(n)
 */
function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();
  let left = 0;
  let ans = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) ?? 0) + 1);
    while (map.get(s[right])! > 1) {
      const currentLeft = map.get(s[left]) ?? 0;
      map.set(s[left], currentLeft === 0 ? 0 : currentLeft - 1);
      left++
    }
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

/*
  TC: O(n)
  SC: O(n)
 */
function lengthOfLongestSubstringOptimized(s: string): number {
  const map = new Map<string, number>();
  let left = 0;
  let ans = 0;

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right])! + 1, left);
    }
    map.set(s[right], right);
    ans = Math.max(right - left + 1, ans);
  }

  return ans;
}
