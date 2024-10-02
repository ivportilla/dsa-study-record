/*
  Sort Characters By Frequency
  Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

  Return the sorted string. If there are multiple answers, return any of them.

  https://leetcode.com/problems/sort-characters-by-frequency/description/
 */

/*
  TC: O(n)
  SC: O(n)
  Details: This solutions uses BucketSort as the domain is limited to the 27 chars from the lowercase english alphabet
 */
export function frequencySort(s: string): string {
  const mapFreq = new Map<string, number>();
  let maxFreq = 0;

  // Count frequency
  for (const char of s) {
    const newFreq = (mapFreq.get(char) ?? 0) + 1;
    mapFreq.set(char, newFreq)
    maxFreq = Math.max(newFreq, maxFreq);
  }

  const freqBucket: (Set<string> | null)[] = Array(maxFreq).fill(null);
  const times = (c: string, times: number): string[] => Array(times).fill(c);

  // Fill buckets with the letters, the index is the frequency
  for (const [c, freq] of mapFreq) {
    const currentBucket = freqBucket[freq] ?? new Set<string>();
    currentBucket.add(c);
    freqBucket[freq] = currentBucket;
  }

  // Simulate String-builder
  let result: string[] = Array(s.length).fill('');
  let currentPos = 0;

  // Generate result iterating through the freqBucket in inverse order
  for (let i = freqBucket.length - 1; i >= 0; i--) {
    const targetBucket = freqBucket[i];
    if (targetBucket) {
      targetBucket.forEach(c => {
        const chars = times(c, i);
        chars.forEach(c => {
          result[currentPos++] = c;
        });
      })
    }
  }

  return result.join('');
}
