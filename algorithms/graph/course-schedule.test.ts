import { canFinishDFS, canFinishBFS } from './course-schedule';

describe('Course Schedule - DFS vs BFS', () => {
  const implementations = [
    { name: 'canFinishDFS', fn: canFinishDFS },
    { name: 'canFinishBFS', fn: canFinishBFS }
  ];

  implementations.forEach(({ name, fn }) => {
    describe(name, () => {
      test('should return true when there are no prerequisites', () => {
        expect(fn(2, [])).toBe(true);
      });

      test('should return true for independent courses', () => {
        expect(fn(4, [[1, 0], [2, 1], [3, 2]])).toBe(true);
      });

      test('should return false when there is a simple cycle', () => {
        expect(fn(2, [[1, 0], [0, 1]])).toBe(false);
      });

      test('should return true when there is no cycle in a more complex graph', () => {
        expect(fn(5, [[1, 0], [2, 1], [3, 2], [4, 3]])).toBe(true);
      });

      test('should return false when there is a complex cycle', () => {
        expect(fn(3, [[0, 1], [1, 2], [2, 0]])).toBe(false);
      });

      test('should handle disconnected components with no cycle', () => {
        expect(fn(6, [[1, 0], [2, 1], [4, 3], [5, 4]])).toBe(true);
      });

      test('should handle disconnected components with a cycle', () => {
        expect(fn(6, [[1, 0], [2, 1], [4, 3], [5, 4], [3, 5]])).toBe(false);
      });

      test('should handle a course that is a prerequisite for multiple courses', () => {
        expect(fn(4, [[1, 0], [2, 0], [3, 1], [3, 2]])).toBe(true);
      });

      test('should handle a course that depends on multiple prerequisites', () => {
        expect(fn(4, [[1, 0], [2, 0], [3, 1], [3, 2]])).toBe(true);
      });

      test('should handle the case with only one course', () => {
        expect(fn(1, [])).toBe(true);
      });

      test('should handle the case where all courses depend on one course', () => {
        expect(fn(4, [[1, 0], [2, 0], [3, 0]])).toBe(true);
      });

      test('should return false when every course is a prerequisite of itself', () => {
        expect(fn(3, [[0, 0], [1, 1], [2, 2]])).toBe(false);
      });
    });
  });
});
