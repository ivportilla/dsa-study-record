export class GraphNode {
  constructor (
    public val: number,
    public neighbors: GraphNode[] = []
  ) {}
}

// BFS - Kahn’s algorithm
export function canFinishBFS(numCourses: number, prerequisites: number[][]): boolean {
  const courses: Map<number, Set<number>> = new Map();
  const degree: number[] = [];
  const queue: number[] = [];
  let totalPrereqs = 0;

  // Early success
  if (prerequisites.length === 0) return true;

  // Set up courses
  for (let i = 0; i < numCourses; i++) {
    courses.set(i, new Set());
    degree[i] = 0;
  }

  // Initialize neighbors
  for (const [course, req] of prerequisites) {
    degree[course]++;
    courses.get(req)!.add(course);
    totalPrereqs++;
  }

  // Get courses without prerequisites
  for (let i = 0; i < numCourses; i++) {
    if (degree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const current = queue.shift()!;
    const neighbors = courses.get(current)!;
    for (const ne of neighbors) {
      if (--degree[ne] === 0) {
        queue.push(ne);
      }
      totalPrereqs--;
    }
  }

  return totalPrereqs === 0;
}


// DFS
export function canFinishDFS(numCourses: number, prerequisites: number[][]): boolean {
  const courses: Map<number, GraphNode> = new Map();

  for (let i = 0; i < numCourses; i++) {
    courses.set(i, new GraphNode(i));
  }

  for (const [c1, c2] of prerequisites) {
    const c1Node = courses.has(c1) ? courses.get(c1)! : courses.set(c1, new GraphNode(c1)).get(c1)!;
    const c2Node = courses.has(c2) ? courses.get(c2)! : courses.set(c2, new GraphNode(c2)).get(c2)!;
    c1Node.neighbors.push(c2Node);
  }

  if (prerequisites.length === 0) {
    return true;
  }

  const visited = new Set<GraphNode>();
  function canTake(root: GraphNode, coursed: Set<GraphNode>): boolean {
    if (root.neighbors.length == 0 || coursed.has(root)) {
      return true;
    }

    // Cycle
    if (visited.has(root)) {
      return false;
    }

    visited.add(root);

    for (const neighbor of root.neighbors) {
      if (!canTake(neighbor, coursed)) {
        return false;
      }
    }

    visited.delete(root);

    return true;
  }

  const coursed = new Set<GraphNode>();
  for (let i = 0; i < numCourses; i++) {
    const targetCourse = courses.get(i)!;
    if (!coursed.has(targetCourse) && !canTake(targetCourse, coursed)) {
      return false;
    } else {
      coursed.add(courses.get(i)!);
    }
  }

  return true;
};
