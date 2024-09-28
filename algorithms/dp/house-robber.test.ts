import { rob } from './house-robber';

describe('rob', () => {
  test('should return 0 when no houses are available', () => {
    expect(rob([])).toBe(0);
  });

  test('should return the value of the single house when only one house is available', () => {
    expect(rob([5])).toBe(5);
  });

  test('should return the maximum of two houses', () => {
    expect(rob([2, 3])).toBe(3);
    expect(rob([3, 2])).toBe(3);
  });

  test('should return the correct amount for three houses', () => {
    expect(rob([2, 7, 9])).toBe(11); // Rob house 1 and 3
    expect(rob([10, 2, 9])).toBe(19); // Rob house 1 and 3
  });

  test('should handle cases with multiple houses', () => {
    expect(rob([1, 2, 3, 1])).toBe(4); // Rob house 1 and 3
    expect(rob([2, 7, 9, 3, 1])).toBe(12); // Rob house 1, 3, and 5
    expect(rob([2, 1, 1, 2])).toBe(4); // Rob house 1 and 4
  });

  test('should handle cases where all houses have the same value', () => {
    expect(rob([4, 4, 4, 4])).toBe(8); // Rob house 1 and 3 or house 2 and 4
  });

  test('should handle a large array of houses', () => {
    const nums = Array(1000).fill(1);
    expect(rob(nums)).toBe(500); // Maximum is robbing every other house
  });

  test('should handle alternating high and low values', () => {
    expect(rob([5, 1, 5, 1, 5, 1, 5])).toBe(20); // Rob all high-value houses
  });

  test('should handle decreasing values', () => {
    expect(rob([10, 9, 8, 7, 6, 5])).toBe(24); // Rob house 1, 3, and 5
  });

  test('should handle increasing values', () => {
    expect(rob([1, 2, 3, 4, 5, 6])).toBe(12); // Rob house 2, 4, and 6
  });
});
