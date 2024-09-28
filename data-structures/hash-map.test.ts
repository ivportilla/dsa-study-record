import { HashTable } from './hash-map';

describe('HashTable', () => {
  let hashTable: HashTable;

  beforeEach(() => {
    hashTable = new HashTable(5);
  });

  it('should initialize with the correct capacity', () => {
    expect(hashTable.getCapacity()).toBe(5);
    expect(hashTable.getSize()).toBe(0);
  });

  it('should insert a new key-value pair', () => {
    hashTable.insert('apple', 1);
    expect(hashTable.get('apple')).toBe(1);
  });

  it('should handle collisions and rehash', () => {
    hashTable.insert('apple', 1);
    hashTable.insert('banana', 2);
    hashTable.insert('cherry', 3);
    hashTable.insert('date', 4);
    hashTable.insert('elderberry', 5);

    // This should trigger a resize
    hashTable.insert('fig', 6);

    expect(hashTable.get('apple')).toBe(1);
    expect(hashTable.get('banana')).toBe(2);
    expect(hashTable.get('cherry')).toBe(3);
    expect(hashTable.get('date')).toBe(4);
    expect(hashTable.get('elderberry')).toBe(5);
    expect(hashTable.get('fig')).toBe(6);
  });

  it('should update an existing key-value pair', () => {
    hashTable.insert('apple', 1);
    hashTable.insert('apple', 10);
    expect(hashTable.get('apple')).toBe(10);
  });

  it('should remove a key-value pair', () => {
    hashTable.insert('apple', 1);
    expect(hashTable.remove('apple')).toBe(true);
    expect(hashTable.get('apple')).toBe(-1);
  });

  it('should return -1 when getting a non-existent key', () => {
    expect(hashTable.get('apple')).toBe(-1);
  });

  it('should return false when removing a non-existent key', () => {
    expect(hashTable.remove('apple')).toBe(false);
  });

  it('should resize the underlying array when the load factor reaches 0.5', () => {
    for (let i = 0; i < 2; i++) {
      hashTable.insert(`key-${i}`, i);
    }
    expect(hashTable.getSize()).toBe(2);
    expect(hashTable.getCapacity()).toBe(5);

    hashTable.insert('key-3', 3);
    expect(hashTable.getSize()).toBe(3);
    expect(hashTable.getCapacity()).toBe(10);
  });
});
