import { SingleListNode as ListNode } from './node';

/*
  Reverse Linked List

  Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

/*
  TC: O(n)
  SC: O(1)
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let curr = head;

  while (curr) {
    const tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }

  return prev;
}
