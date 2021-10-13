function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function logList(list) {
  let head = list;
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  console.log(res);
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
// var deleteDuplicates = function (head) {
//   const map = {};
//   let current = head;
//   let resultNode = new ListNode(-1, null);
//   let result = resultNode;

//   while (current) {
//     if (!map[current.val]) {
//       map[current.val] = true;
//       resultNode.next = new ListNode(current.val);
//       resultNode = resultNode.next;
//     }
//     current = current.next;
//   }

//   // logList(result.next);

//   return result.next;
// };

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current = head;

  while (current) {
    if (current.next && current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

deleteDuplicates(
  new ListNode(
    1,
    new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          2,
          new ListNode(
            3,
            new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4))))
          )
        )
      )
    )
  )
);
