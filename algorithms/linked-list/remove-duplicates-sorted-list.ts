import { SingleListNode as ListNode } from './node'

/*
  Remove Duplicates from Sorted List

  Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

  https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 */

/*
  TC: O(n)
  SC: O(1)
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let i: ListNode | null = head;
  let iNext: ListNode | null = head.next;

  while (i && iNext) {
    if (i.val === iNext.val) {
      i.next = iNext.next;
      iNext = iNext.next;
    } else {
      i = i.next;
      iNext = iNext.next;
    }
  }

  return head;
}
