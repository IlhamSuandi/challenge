// @leet start
/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * @param l1 The first linked list
 * @param l2 The second linked list
 * @return The sum of the two linked lists
 *
 * @complexity
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

// Definition for singly-linked list.
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let carry = 0,
    num1 = 0,
    num2 = 0,
    current = new ListNode(),
    solution = current;

  while (l1 || l2) {
    num1 = l1 ? l1.val : 0;
    num2 = l2 ? l2.val : 0;

    if (num1 + num2 + carry > 9) {
      // if sum more than 2 digits then add carry

      current.next = new ListNode(num1 + num2 + carry - 10);
      carry = 1;

      // cycle between current node
      current = current.next;
    } else {
      // else just sum

      current.next = new ListNode(num1 + num2 + carry);
      carry = 0;

      // cycle between current node
      current = current.next;
    }

    // cycle between listnode node
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // cycle between listnode node
  if (carry) {
    current.next = new ListNode(carry);
  }

  return solution.next;
}
// @leet end
