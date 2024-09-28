/*
  Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 */

/*
  TC: O(n*m)
  SC: O(n)
 */
export function groupAnagrams(strs: string[]): string[][] {
  const hashFn = (str: string): string => {
    const lettersLength = 'z'.charCodeAt(0) - 'a'.charCodeAt(0);
    let result: number[] = Array(lettersLength + 1).fill(0);
    for (let i = 0; i < str.length; i++) {
      const pos = str[i].charCodeAt(0) - 97;
      result[pos]++;
    }
    return result.join('-');
  }

  const result = new Map<string, string[]>()

  for (let i = 0; i < strs.length; i++) {
    const key = hashFn(strs[i]);
    const current = result.get(key) ?? [];
    result.set(key, current.concat([strs[i]]));
  }

  return [...result.values()];
}
