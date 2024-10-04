export function maxAreaOfIsland(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0]?.length ?? 0;
  let maxArea = 0;

  function countIsland(r: number, c: number): number {
    if (grid[r][c] === 0) {
      return 0;
    }

    let count = 1;
    grid[r][c] = 0;

    if (r + 1 < m) {
      count += countIsland(r + 1, c);
    }

    if (r - 1 >= 0) {
      count += countIsland(r - 1, c);
    }

    if (c + 1 < n) {
      count += countIsland(r, c + 1);
    }

    if (c - 1 >= 0) {
      count += countIsland(r, c - 1);
    }

    return count;
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1) {
        const islandArea = countIsland(r, c);
        if (islandArea > maxArea) {
          maxArea = islandArea;
        }
      }
    }
  }

  return maxArea;
};
