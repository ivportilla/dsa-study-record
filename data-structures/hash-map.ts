export type KeyValue<K, V> = {
  key: K;
  value: V;
}

export type HashEntry<K, V> = KeyValue<K, V> | null;

export class HashTable {
  arr: HashEntry<string, number>[];
  size: number;
  capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.arr = new Array(capacity).fill(null);
  }

  // Multiplication algorithm
  hash(input: string) {
    const goldenRatio = 0.6180339887;
    let key = 0;
    for (let i = 0; i < input.length; i++) {
      key += input.charCodeAt(i) * 31;
    }
    return Math.floor(((key * goldenRatio) % 1) * this.capacity);
  }

  /**
   * @param {string} key
   * @param {number} value
   * @returns {number}
   */
  insert(key: string, value: number): void {
    const hash = this.hash(key);
    if (this.arr[hash] === null) {
      this.arr[hash] = { key, value };
    } else if (this.arr[hash].key === key) {
      this.arr[hash] = { key, value };
      // Return as we don't need to resize
      return;
    } else {
      let nextEmptySlot = (hash + 1) % this.capacity;
      while (this.arr[nextEmptySlot] !== null) {
        nextEmptySlot = (nextEmptySlot + 1) % this.capacity;
      }
      this.arr[nextEmptySlot] = { key, value };
    }
    this.size++;
    if (this.size === Math.ceil(this.capacity / 2)) {
      this.resize();
    }
  }

  /**
   * @param {string} key
   * @returns {number}
   */
  get(key: string): number {
    const hash = this.hash(key);
    if (this.arr[hash] === null) {
      return -1;
    } else if (this.arr[hash].key === key) {
      return this.arr[hash].value;
    } else {
      let current = (hash + 1) % this.capacity;
      while (this.arr[current] !== null && current !== hash) {
        if (this.arr[current] && this.arr[current]!.key === key) {
          return this.arr[current]!.value;
        }
        current = (current + 1) % this.capacity
      }
      return -1;
    }

  }

  /**
   * @param {string} key
   * @returns {boolean}
   */
  remove(key: string): boolean {
    const hash = this.hash(key);
    if (this.arr[hash] === null) {
      return false;
    } else if (this.arr[hash].key === key) {
      this.arr[hash] = null;
      this.size--;
      return true;
    } else {
      let current = (hash + 1) % this.capacity;
      while (this.arr[current] !== null && current !== hash) {
        if (this.arr[current]!.key === key) {
          this.arr[current] = null;
          this.size--;
          return true;
        } else {
          current = (current + 1) % this.capacity;
        }
      }
      return false;
    }
  }

  /**
   * @returns {number}
   */
  getSize(): number {
    return this.size;
  }

  /**
   * @returns {number}
   */
  getCapacity(): number {
    return this.capacity;
  }

  /**
   * @return {void}
   */
  resize(): void {
    const newCapacity = this.capacity * 2;
    const oldArray = this.arr;
    const updatedArray = new Array(newCapacity).fill(null);
    this.capacity = newCapacity;
    this.arr = updatedArray;
    this.size = 0;

    for (let i = 0; i < oldArray.length; i++) {
      const elementToInsert = oldArray[i];
      if (elementToInsert !== null) {
        this.insert(elementToInsert.key, elementToInsert.value);
      }
    }
  }
}
