export class _Node {
  val: number
  neighbors: _Node[]

  constructor(val?: number, neighbors?: _Node[]) {
      this.val = (val===undefined ? 0 : val)
      this.neighbors = (neighbors===undefined ? [] : neighbors)
  }
}

export function cloneGraph(node: _Node | null): _Node | null {
  const queue = [node];

  if (node === null) {
    return null;
  }

  const hash: Record<number, _Node> = {};

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const n = queue.shift()!;

      if (!(n.val in hash)) {
        hash[n.val] = new _Node(n.val, []);
      }

      for (const neighbor of n.neighbors) {
        if (!(neighbor.val in hash)) {
          hash[neighbor.val] = new _Node(neighbor.val, []);
          queue.push(neighbor);
        }

        hash[n.val].neighbors.push(hash[neighbor.val]);
      }
    }
  }

  return hash[node.val];
}
