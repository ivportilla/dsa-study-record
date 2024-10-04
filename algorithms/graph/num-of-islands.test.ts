import { numIslands } from './num-of-islands';

describe('numIslands', () => {
  test('should return 0 for an empty grid', () => {
    const grid: string[][] = [];
    expect(numIslands(grid)).toBe(0);
  });

  test('should return 0 for a grid with no land', () => {
    const grid = [
      ['0', '0', '0'],
      ['0', '0', '0'],
      ['0', '0', '0'],
    ];
    expect(numIslands(grid)).toBe(0);
  });

  test('should return 2 for a grid with two islands', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '1', '1'],
      ['0', '0', '0', '1', '1'],
    ];
    expect(numIslands(grid)).toBe(2);
  });

  test('should return 4 for a grid with multiple isolated islands', () => {
    const grid = [
      ['1', '0', '0', '1', '0'],
      ['0', '0', '0', '0', '0'],
      ['0', '0', '1', '0', '1'],
      ['0', '0', '0', '0', '0'],
    ];
    expect(numIslands(grid)).toBe(4);
  });

  test('should handle a grid with connected vertical islands', () => {
    const grid = [
      ['1', '0', '1', '0'],
      ['1', '0', '1', '0'],
      ['0', '0', '1', '0'],
      ['0', '0', '1', '0'],
    ];
    expect(numIslands(grid)).toBe(2);
  });

  test('should handle a grid with connected horizontal islands', () => {
    const grid = [
      ['1', '1', '1', '0'],
      ['0', '0', '0', '0'],
      ['0', '0', '1', '1'],
      ['0', '0', '0', '0'],
    ];
    expect(numIslands(grid)).toBe(2);
  });

  test('should handle a single cell grid that is land', () => {
    const grid = [['1']];
    expect(numIslands(grid)).toBe(1);
  });

  test('should handle a single cell grid that is water', () => {
    const grid = [['0']];
    expect(numIslands(grid)).toBe(0);
  });

  test('should handle a non-square grid', () => {
    const grid = [
      ['1', '0', '1', '1', '0'],
      ['1', '0', '0', '1', '1'],
    ];
    expect(numIslands(grid)).toBe(2);
  });
});
