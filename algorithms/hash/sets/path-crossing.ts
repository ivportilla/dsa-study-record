/*
  Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
  Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

  https://leetcode.com/problems/path-crossing/description/
 */

/*
  TC: O(n)
  SC: O(n)
 */
export function isPathCrossing(path: string): boolean {
  let point: [number, number] = [0, 0];
  const pointToStr = (p: [number, number]): string => `${p[0]},${p[1]}`;
  const visitedPoints = new Set<string>();
  const move = (letter: String, currentPoint: [number, number]): [number, number] => {
    const [x, y] = currentPoint;
    switch (letter) {
      case 'N':
        return [x, y + 1];
      case 'S':
        return [x, y - 1];
      case 'W':
        return [x - 1, y];
      case 'E':
        return [x + 1, y];
      default:
        return currentPoint;
    }
  }

  visitedPoints.add(pointToStr(point)); // Add 0, 0

  for (let i = 0; i < path.length; i++) {
    point = move(path[i], point);
    const currentPoint = pointToStr(point);
    if (visitedPoints.has(currentPoint)) {
      return true;
    } else {
      visitedPoints.add(currentPoint);
    }
  }

  return false;
};
