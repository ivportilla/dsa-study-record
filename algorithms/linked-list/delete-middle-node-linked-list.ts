/*
  Delete the Middle Node of a Linked List

  You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

  The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

    For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

  https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/
 */

import { SingleListNode as ListNode } from './node';

/*
  TC: O(n)
  SC: O(1)
 */
export function deleteMiddle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  let prev = null;

  if (!head || !head.next) {
    return null;
  }

  while (slow && fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev!.next = slow!.next;

  return head;
}
