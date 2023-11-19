var MyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

var Node = function(val) {
  this.val = val;
  this.next = null;
}

/**
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index > this.size) return -1;
  let counter = 0;
  let node = this.head;
  while (node) {
      if (counter === index) return node.val;
      node = node.next;
      counter++;
  }

};

/**
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  let newNode = new Node(val);
  if (!this.head) {
      this.head = newNode
      this.tail = newNode;
  } else {
      let prevHead = this.head;
      this.head = newNode;
      this.head.next = prevHead;
  }
  this.size++;
};

/**
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  let newNode = new Node(val);
  if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
  } else {
      let temp = this.tail;
      this.tail = newNode;
      this.tail.next = temp;
  }
  this.size++;
};

/**
* @param {number} index
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) return false;
  let newNode = new Node(val);
  if (index === this.size) {
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
         this.tail.next = newNode;
         this.tail = newNode;
      }
  } else {
      let prev = this.getPrevious(index);
      newNode.next = prev.next;
      prev.next = newNode;
  }
  this.size++;
  return true;
};

/**
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index > this.size) return false;
  if (index === 0) {
      this.head = null;
      this.tail = null;
  } else {
      let prev = this.getPrevious(index);
      if (index === this.size) {
          this.tail = prev;
      }
      let next = prev.next.next
      prev.next = next;
  }
  this.size--;
};

MyLinkedList.prototype.getPrevious = function(index) {
      if (index < 0 || index >= this.size || index === 0) {
          return null; // Invalid index or no previous node for the head
      }

      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
      }

      return prev;
}

let myList = new MyLinkedList();
