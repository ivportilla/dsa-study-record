/*
  You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.
  Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.
 */


/*
  TC: O(n)
  SC: O(n)
 */
export function minimumCardPickup(cards: number[]): number {
  const cardsMap = new Map<number, number>();
  let ans = Number.MAX_VALUE;

  for (let i = 0; i < cards.length; i++) {
    if (cardsMap.has(cards[i])) {
      const idx = cardsMap.get(cards[i])!;
      ans = Math.min(i - idx + 1, ans);
    }

    // Update the last position, in case we found a shorter match eventually
    cardsMap.set(cards[i], i);

  }

  return ans === Number.MAX_VALUE ? -1 : ans;
}
