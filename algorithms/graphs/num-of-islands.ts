export function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0]?.length ?? 0;
  let islands = 0;

  function markIsland(r: number, c: number): void {
    if (r < 0 || c < 0 || r === m || c === n || grid[r][c] === '0' || grid[r][c] === '#') {
      return;
    }

    grid[r][c] = '#';
    markIsland(r + 1, c);
    markIsland(r - 1, c);
    markIsland(r, c + 1);
    markIsland(r, c - 1);
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === '1') {
        islands++;
        markIsland(r, c);
      }
    }
  }

  return islands;
};
