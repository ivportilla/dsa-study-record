import { maxAreaOfIsland } from './max-area-island';

describe('maxAreaOfIsland', () => {
  test('should return 0 for an empty grid', () => {
    const grid: number[][] = [];
    expect(maxAreaOfIsland(grid)).toBe(0);
  });

  test('should return 0 for a grid with no land', () => {
    const grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(maxAreaOfIsland(grid)).toBe(0);
  });

  test('should return correct area for a grid with one island', () => {
    const grid = [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 1],
    ];
    expect(maxAreaOfIsland(grid)).toBe(4);
  });

  test('should return correct area for a grid with multiple isolated islands', () => {
    const grid = [
      [1, 0, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
    ];
    expect(maxAreaOfIsland(grid)).toBe(1);
  });

  test('should handle a grid with connected vertical islands', () => {
    const grid = [
      [1, 0, 1, 0],
      [1, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
    ];
    expect(maxAreaOfIsland(grid)).toBe(4);
  });

  test('should handle a grid with connected horizontal islands', () => {
    const grid = [
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 1],
      [0, 0, 0, 0],
    ];
    expect(maxAreaOfIsland(grid)).toBe(3);
  });

  test('should handle a single cell grid that is land', () => {
    const grid = [[1]];
    expect(maxAreaOfIsland(grid)).toBe(1);
  });

  test('should handle a single cell grid that is water', () => {
    const grid = [[0]];
    expect(maxAreaOfIsland(grid)).toBe(0);
  });

  test('should handle a non-square grid', () => {
    const grid = [
      [1, 0, 1, 1, 0],
      [1, 0, 0, 1, 1],
    ];
    expect(maxAreaOfIsland(grid)).toBe(4);
  });

  test('should handle a large single island', () => {
    const grid = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];
    expect(maxAreaOfIsland(grid)).toBe(12);
  });
});
