var deleteDuplicates = function(head) {
  if(!head || !head.next) return head;
  let curr = head.next;
  let prev = head;

  while (curr) {
      if (prev.val === curr.val) {
          prev.next = curr.next;
      } else {
          prev = curr;
      }
      curr = prev.next;
  }
  return head
};