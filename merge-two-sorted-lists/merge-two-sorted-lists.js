class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let node = new ListNode(-1);
  let result = node;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      node.next = new ListNode(l2.val);
      node = node.next;
      l2 = l2.next;
    } else if (l2.val > l1.val) {
      node.next = new ListNode(l1.val);
      node = node.next;
      l1 = l1.next;
    } else {
      node.next = new ListNode(l1.val);
      node = node.next;
      l1 = l1.next;

      node.next = new ListNode(l2.val);
      node = node.next;
      l2 = l2.next;
    }
  }

  if (l1) {
    node.next = l1;
  }
  if (l2) {
    node.next = l2;
  }

  return result.next;
};

// 1 -> 2 -> 4
// 1 -> 3 -> 4
console.log(
  mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4)))
  )
);

module.exports = mergeTwoLists;
