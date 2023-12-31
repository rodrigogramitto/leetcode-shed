  class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    get(index) {
        if (index === 0) {
            if (!this.head) return - 1;
            return this.head.val;
        };
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) return node.val;
            node = node.next
            counter++;
        }
        return -1;
    }

    insertHead(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }
        this.size++;
    }

    insertTail(val) {
        let newNode = new Node(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
          let prevTail = this.tail;
          prevTail.next = newNode;
          this.tail = newNode;
        }
        this.size++;
    }

    remove(index) {
      if (index >= this.size || index < 0 ) return false;

        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let node = this.head;
        let count = 0;

        while (node && count < index - 1) {
            node = node.next;
            count++;
        }
        if (!node || !node.next) return false;
        node.next = node.next.next;
        if (!node.next) {
          this.tail = node;
        }
        this.size--;
        return true;
    }


    getValues() {
        let values = [];
        let node = this.head;
        while (node) {
            console.log(node);
            values.push(node.val);
            node = node.next;
        }
        return values;
    }

    getPrevious(index) {
        if (index < 0 || index >= this.size || index === 0) {
            return null; // Invalid index or no previous node for the head
        }

        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }

        return prev;
  }

  class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
  }

  let myList = new LinkedList;

  myList.insertHead(1);
  myList.insertTail(2);
  myList.insertTail(3);
  myList.insertTail(4);
  myList.insertTail(5);

  console.log(myList.getValues())
  console.log(myList.getPrevious(4))
