/*
  Reverse Linked List II

  Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

  https://leetcode.com/problems/reverse-linked-list-ii/description/
 */

import { SingleListNode as ListNode } from './node'

/*
  TC: O(n)
  SC: O(1)
 */
export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head) {
    return null;
  }

  let dummy = new ListNode(-1, head);
  let p = dummy;
  let nLeft = null;
  let curr: ListNode | null = head;
  let i = 1;

  let prev = null;
  while (curr) {
    const next: ListNode | null = curr.next;

    if (i < left) {
      p = curr;
    }

    if (i == left) {
      nLeft = curr;
    }

    if (i >= left && i <= right) {
      // Update m - 1 to current element reversed
      p.next = curr
      curr.next = prev;
      prev = curr
    }

    if (i > right) {
      nLeft!.next = curr;
      break;
    }

    i++;
    curr = next;
  }

  return dummy.next;
}
