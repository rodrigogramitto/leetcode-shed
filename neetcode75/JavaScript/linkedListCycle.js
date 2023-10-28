
// Basic solution
const hasCycle = (head) => {
  let node = head;

  while (node) {
    if (!node.seen) {
      node.seen = true;
      node = node.next;
    } else {
      return true;
    }
  }
  return false;
}

// Optimized solution
const hasCycleOptimal = (head) => {
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      const hasCycle = slow === fast;
      if (hasCycle) return true;
  }
  return false
}

