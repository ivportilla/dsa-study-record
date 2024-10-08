import { SingleListNode as ListNode } from './node';

/*
  Middle of the Linked List

  Given the head of a singly linked list, return the middle node of the linked list.

  If there are two middle nodes, return the second middle node.

  https://leetcode.com/problems/middle-of-the-linked-list/description/
 */

/*
  TC: O(n)
  SC: O(1)
 */
export function middleNode(head: ListNode | null): ListNode | null {
  let low = head;
  let fast = head;

  if (!head) {
    return null;
  }

  while (fast && fast.next) {
    low = fast.next;
    fast = fast.next.next;
  }

  return low;
}
