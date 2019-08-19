'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newHead = new Node(value);

    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }

  includes(value) {
    let found = false;
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        found = true;
      }
      current = current.next;
    }
    return found;
  }

  toString() {
    let string = '';
    let current = this.head;
    while (current !== null) {
      string = string.concat(current.value.toString(), ' ')
      current = current.next;
    }
    return string;
  }

}

module.exports = LinkedList;
