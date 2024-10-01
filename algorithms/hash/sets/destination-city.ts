/*
  You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.
  It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

  https://leetcode.com/problems/destination-city/description/
 */

/*
  TC: O(n)
  SC: O(n)
 */
export function destCity(paths: string[][]): string {
  const orig = new Set<string>();

  for (const [o, _] of paths) {
    orig.add(o);
  }

  for (const [_, destination] of paths) {
    if (!orig.has(destination)) {
      return destination;
    }
  }

  return '';
}
