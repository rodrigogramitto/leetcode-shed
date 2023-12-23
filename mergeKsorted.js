// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

const mergeKLists = (lists) => {
    let previous = null;

    for (let i = 0; i < lists.length; i++) {
      previous = mergeTwo(previous, lists[i]);
    }
    return previous;
};

const mergeTwo = (head1, head2) => {
  let sentinel = tail = new ListNode(0);

  while (head1 && head2) {
    const canAddL = head1.val <= head2.val;
    if (canAddL) {
      tail.next = head1;
      head1 = head1.next;
    } else {
      tail.next = head2;
      head2 = head2.next;
    }
    tail = tail.next
  }

  tail.next = head1 || head2;

  return sentinel.next;
};

const ListNode = function(val) {
  this.val = val;
  this.next = null
};

const values = function(node) {
  let values = [];

  while (node) {
    values.push(node.val);
    node = node.next;
  }
  return values;
}

let head1 = new ListNode(1);
head1.next = new ListNode(4);
head1.next.next = new ListNode(5);


let head2 = new ListNode(1)
head2.next = new ListNode(3)
head2.next.next = new ListNode(4);

let list3 = new ListNode(2);
list3.next = new ListNode(6);

let lists = [head1, head2, list3];

let merged = mergeKLists(lists);

console.log(values(merged));