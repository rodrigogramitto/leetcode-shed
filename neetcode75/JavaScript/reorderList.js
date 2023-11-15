// You are given the head of a singly linked-list.
// The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes.
// Only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

 function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
   }

let list = new ListNode(1);

list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
// list.next.next.next.next = new ListNode(5);

var reorderList = function(head) {
  let node = head;
  if (!head || !head.next) return head;

  while(node.next) {
    let next = node.next;
    if (!next.next) break;
    let tail = findTail(node);
    let previous = findPrevious(node, tail.val);
    previous.next = null;
    console.log('next: ', next);
    console.log('previous: ', previous);
    node.next = tail;
    tail.next = next;
    node = next;
  }

  return head;
};

var findTail = function(head) {
  while(head) {
    if (!head.next) return head;
    head = head.next;
  }
}

var findPrevious = function(node, target) {
  while (node && node.next) {
    if (node.next.val === target) return node;
    node = node.next;
  }
  return null;
}

let reordered  = reorderList(list);

function getList(head) {
  let values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }
  return values;
}

 // My solution doesnt work for all test cases. Apparently must try some sort of merge sort solution


var reorderList = function(head) {
  if (!head || head.next) return head;

  let [slow, fast] = [head, head];
  while (fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse the second half of the linked list
  let prev = null;
  let curr = slow;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Merge the two halves
  let first = head;
  let second = prev;
  while (second.next) {
    let next1 = first.next;
    let next2 = second.next;

    first.next = second;
    second.next = next1;
    first= next1;
    second = next2;
  }
  return head;
}
