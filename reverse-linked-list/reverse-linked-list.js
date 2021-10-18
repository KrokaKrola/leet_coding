function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let current = head;
  let prev,
    next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

reverseList(
  new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(
        3,
        new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7))))
      )
    )
  ),
  6
);
