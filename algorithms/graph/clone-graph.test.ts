import { _Node, cloneGraph } from './clone-graph';

describe('cloneGraph', () => {
  function buildGraph(adjList: number[][]): _Node {
    const nodes = adjList.map((_, index) => new _Node(index + 1));
    for (let i = 0; i < adjList.length; i++) {
      nodes[i].neighbors = adjList[i]
        .map(j => nodes[j - 1])
        .filter(neighbor => neighbor !== undefined);
    }
    return nodes[0];
  }

  function compareGraphs(node1: _Node | null, node2: _Node | null, visited = new Set<number>()): boolean {
    if (!node1 || !node2) return node1 === node2;
    if (node1.val !== node2.val || node1.neighbors.length !== node2.neighbors.length) return false;

    visited.add(node1.val);

    for (let i = 0; i < node1.neighbors.length; i++) {
      if (!visited.has(node1.neighbors[i].val) && !compareGraphs(node1.neighbors[i], node2.neighbors[i], visited)) {
        return false;
      }
    }

    return true;
  }

  test('should return null for a null input', () => {
    expect(cloneGraph(null)).toBeNull();
  });

  test('should handle a graph with a single node and no neighbors', () => {
    const node = new _Node(1);
    const cloned = cloneGraph(node);
    expect(cloned).not.toBe(node); // Ensure it's a clone, not the same instance
    expect(cloned?.val).toBe(1);
    expect(cloned?.neighbors).toHaveLength(0);
  });

  test('should handle a graph with a single node with neighbors', () => {
    const node1 = new _Node(1);
    const node2 = new _Node(2);
    node1.neighbors.push(node2);
    node2.neighbors.push(node1);

    const cloned = cloneGraph(node1);
    expect(cloned).not.toBe(node1);
    expect(cloned?.val).toBe(1);
    expect(cloned?.neighbors).toHaveLength(1);
    expect(cloned?.neighbors[0].val).toBe(2);
    expect(cloned?.neighbors[0].neighbors[0]).toBe(cloned); // Ensure deep copy
  });

  test('should handle a more complex graph', () => {
    const adjList = [
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3]
    ];
    const node = buildGraph(adjList);
    const cloned = cloneGraph(node);
    expect(compareGraphs(node, cloned)).toBe(true);
  });

  test('should handle a graph where a node is its own neighbor', () => {
    const node1 = new _Node(1);
    node1.neighbors.push(node1); // Self loop

    const cloned = cloneGraph(node1);
    expect(cloned).not.toBe(node1);
    expect(cloned?.val).toBe(1);
    expect(cloned?.neighbors[0]).toBe(cloned); // Ensure deep copy
  });

  test.only('should handle a graph with multiple components', () => {
    const adjList = [
      [2],
      [1],
      [4],
      [3]
    ];
    const node1 = buildGraph(adjList.slice(0, 2));
    const node2 = buildGraph(adjList.slice(2, 4));

    const cloned1 = cloneGraph(node1);
    const cloned2 = cloneGraph(node2);

    expect(compareGraphs(node1, cloned1)).toBe(true);
    expect(compareGraphs(node2, cloned2)).toBe(true);
  });
});
