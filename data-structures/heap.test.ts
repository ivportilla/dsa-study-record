import MinHeap from './heap';

describe('Heap', () => {
  it('should push correctly', () => {
    const heap = new MinHeap();
    heap.push(5);
    heap.push(6);
    heap.push(7);
    heap.push(1);

    const expected = [0, 1, 5, 7, 6];
    expect(heap.debug()).toEqual(expected);
  });

  it('should peek correctly', () => {
    const heap = new MinHeap();
    heap.push(5);
    heap.push(2);

    const expected = 2;
    expect(heap.peek()).toEqual(expected);
  });

  it('should pop correctly when there are values to pop', () => {
    const heap = new MinHeap();
    heap.push(5);
    heap.push(2);
    heap.push(3);

    const expected = 2;
    const expectedArrayStructure = [0, 3, 5];
    const arrayOrderAndStructure = heap.debug();
    expect(heap.pop()).toEqual(expected);
    expect(arrayOrderAndStructure).toEqual(expectedArrayStructure);
  });

  it('should pop correctly when the heap is empty', () => {
    const heap = new MinHeap();
    expect(heap.pop()).toBeUndefined();
  });

  it('should return the correct size', () => {
    const heap = new MinHeap();
    const emptyHeap = new MinHeap();
    heap.push(5);
    heap.push(2);
    heap.push(4);
    heap.pop();

    expect(heap.size()).toBe(2);
    expect(emptyHeap.size()).toBe(0);
  });

  it('should check emptiness correctly', () => {
    const heap = new MinHeap();
    const emptyHeap = new MinHeap();
    heap.push(5);
    heap.push(2);

    expect(heap.isEmpty()).toBeFalsy();
    expect(emptyHeap.isEmpty()).toBeTruthy();

    heap.pop();
    heap.pop();
    expect(heap.isEmpty()).toBeTruthy();
  });

  it('should heapify correctly', () => {
    const heap = new MinHeap();
    heap.heapify([60, 50, 80, 40, 30, 10, 70, 20, 90]);
    const expected = [0, 10, 30, 20, 50, 80, 70, 40, 90, 60];
    expect(heap.debug()).toEqual(expected);
  });
});
