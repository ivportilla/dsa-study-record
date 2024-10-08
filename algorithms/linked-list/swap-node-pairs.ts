import { SingleListNode as ListNode } from './node';

/*
  Swap Nodes in Pairs

  Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 */

/*
  TC: O(n)
  SC: O(1)
 */
export function swapPairs(head: ListNode | null): ListNode | null {
  let curr = head;
  let next = head?.next;
  let dummy = new ListNode(-1, head);
  let prev = dummy;

  if (!head) {
    return null;
  }

  while (curr && next) {
    const first = next.next;

    next.next = curr;
    curr.next = first;

    prev.next = next;
    prev = curr;

    curr = first;
    next = first?.next;
  }

  return dummy.next;
}
