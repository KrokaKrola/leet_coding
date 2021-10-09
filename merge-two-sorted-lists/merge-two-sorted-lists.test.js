const mergeTwoLists = require("./merge-two-sorted-lists");
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
describe("merge-two-sorted-lists", () => {
  it("should return no errors", () => {
    expect(
      JSON.stringify(
        mergeTwoLists(
          new ListNode(1, new ListNode(2, new ListNode(4))),
          new ListNode(1, new ListNode(3, new ListNode(4)))
        )
      )
    ).toBe(
      JSON.stringify(
        new ListNode(
          1,
          new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
          )
        )
      )
    );

    expect(JSON.stringify(mergeTwoLists(new ListNode(), new ListNode()))).toBe(
      JSON.stringify(new ListNode(0, new ListNode()))
    );
  });
});
