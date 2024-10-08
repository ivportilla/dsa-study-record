export class SingleListNode {
  val: number;
  next: SingleListNode | null;

  constructor(val: number, next: SingleListNode | null) {
    this.val = val
    this.next = next;
  }
}
