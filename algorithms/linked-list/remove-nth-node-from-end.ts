/*
  Remove Nth Node From End of List

  Given the head of a linked list, remove the nth node from the end of the list and return its head.

  https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 */

import { SingleListNode as ListNode } from './node'

/*
  TC: O(n)
  SC: O(1)
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head;
  let slow = head;

  if (!head || !head.next) {
    return null
  }

  for (let i = 0; i < n; i++) {
    fast = fast!.next;
  }

  if (!fast) {
    return head.next;
  }

  while (slow && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow!.next = slow!.next!.next;

  return head;
}
