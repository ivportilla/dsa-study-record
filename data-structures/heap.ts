export default class MinHeap {
  private heap: number[];

  constructor() {
    this.heap = [0];
  }

  private getParentIndex(index: number): number {
    return index >> 1;
  }

  private getLeftChildIndex(index: number): number {
    return index * 2;
  }

  private getRightChildIndex(index: number): number {
    return index * 2 + 1;
  }

  private swap(index1: number, index2: number): void {
    const tmp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = tmp;
  }

  push(value: number): void {
    this.heap.push(value);

    let i = this.size();
    while (this.getParentIndex(i) > 0 && this.heap[i] < this.heap[this.getParentIndex(i)]) {
      this.swap(i, this.getParentIndex(i))
      i = this.getParentIndex(i);
    }
  }

  pop(): number | undefined {
    if (this.isEmpty()) {
      return undefined;
    } else if (this.size() === 1) {
      return this.heap.pop();
    }

    const res = this.peek();

    // Replace last to root
    this.heap[1] = this.heap.pop() as number;

    // Move the root down correctly
    this.percolateDown(1);

    return res;
  }

  heapify(input: number[]): void {
    if (input.length === 0) return;

    // Make its structure consistent
    input.push(input[0]);
    this.heap = input;
    this.heap[0] = 0;

    // Restore the order property
    // curr = this.heap.length >> 1, because the last we will have at least heap.size() / 2 leafs
    for (let curr = this.heap.length >> 1; curr > 0 ; curr--) {
      this.percolateDown(curr);
    }
  }


  private percolateDown(idx: number): void {
    let i = idx;
    while (this.getLeftChildIndex(i) <= this.size()) {
      const leftIdx = this.getLeftChildIndex(i);
      const rightIdx = this.getRightChildIndex(i);
      const rightExists = rightIdx <= this.size();

      if (rightExists && this.heap[rightIdx] <= this.heap[leftIdx] && this.heap[i] > this.heap[rightIdx]) {
        this.swap(i, rightIdx);
        i = rightIdx;
      } else if (this.heap[i] > this.heap[leftIdx]) {
        this.swap(i, leftIdx);
        i = leftIdx
      } else {
        break;
      }
    }
  }

  peek(): number | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.heap[1];
  }

  size(): number {
    return this.heap.length - 1;
  }

  isEmpty(): boolean {
    return this.heap.length === 1;
  }

  // Optional: Implement this to help with debugging
  print(): void {
    console.log(this.heap);
  }

  debug(): number[] {
    return this.heap;
  }
}
