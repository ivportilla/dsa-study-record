/*
  Reverse Only Letters

  Given a string s, reverse the string according to the following rules:

    All the characters that are not English letters remain in the same position.
    All the English letters (lowercase or uppercase) should be reversed.

  Return s after reversing it.

  https://leetcode.com/problems/reverse-only-letters/description/
 */

/*
  TC: O(n)
  SC: O(n)
  Approach: Two pointers
 */
function reverseOnlyLetters(s: string): string {
  const n = s.length;
  const target = [...s];

  let left = 0;
  let right = n - 1;
  const isLetter = (c: string) => /[a-zA-Z]/.test(c);

  while (left < right) {
    const isLetterLeft = isLetter(target[left]);
    const isLetterRight = isLetter(target[right]);

    if (isLetterLeft && isLetterRight) {
      [target[left], target[right]] = [target[right], target[left]];
      left++;
      right--;
    } else if (isLetterLeft) {
      right--;
    } else if (isLetterRight) {
      left++
    } else {
      left++;
      right--;
    }
  }

  return target.join('');
}
