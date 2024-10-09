import { reverseList } from './reverse-list';
import { SingleListNode as ListNode } from './node';

/*
  Maximum Twin Sum of a Linked List

  In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

    For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.

  The twin sum is defined as the sum of a node and its twin.

  Given the head of a linked list with even length, return the maximum twin sum of the linked list.

  https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/
 */

/*
  TC: O(n)
  SC: O(n)
 */

export function pairSum(head: ListNode | null): number {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let middle = reverseList(slow);
  let start = head;
  let ans = 0;

  while (middle) {
    ans = Math.max(ans, start!.val + middle.val);
    start = start!.next;
    middle = middle.next;
  }

  return ans;
}
