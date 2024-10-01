/*
  Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
  A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).
 */

/*
  SC: O(n^2)
  TC: O(n)
  Solution explanation: https://leetcode.com/problems/equal-row-and-column-pairs/solutions/5845440/ts-simple-solution-using-hash-map-tc-o-n-2-sc-o-n/
 */
function equalPairs(grid: number[][]): number {
  const n = grid.length;
  const mapRows = new Map<string, number>();
  let ans = 0;

  for (let i = 0; i < n; i++) {
    const target = grid[i].join('-');
    const count = mapRows.get(target) ?? 0;
    mapRows.set(target, count + 1);
  }

  const column = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      column[j] = grid[j][i];
    }
    const target = column.join('-');
    const count = mapRows.get(target) ?? 0;
    ans += count;
  }

  return ans;
}
