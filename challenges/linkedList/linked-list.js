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

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      this.appendHelper(value, this.head)
    }
  }
  appendHelper(value, current) {
    if (current.next === null) {
      current.next = new Node(value);
      return;
    }
    this.appendHelper(value, current.next);
  }

  insertBefore(value, newVal) {
    // if list is empty return undefined.
    if (this.head === null) {
      return undefined;
    }

    let current = this.head;
    let previous = null;

    while (value !== current.value) {
      // if no more values remain to check - value is not in list
      if (current.next === null) {
        return undefined;
      }
      previous = current;
      current = current.next;
    }
    let newNode = new Node(newVal)
    newNode.next = current;
    // if not at the beginning of list
    if (previous === null) {
      this.head = newNode;
    } else {
      previous.next = newNode;
    }

    return newNode.value;
  }

  insertAfter(value, newVal) {
    // if list is empty return undefined.
    if (this.head === null) {
      return undefined;
    }

    let current = this.head;

    while (current.value !== value) {
      // if no more values remain to check - value is not in list
      if (current.next === null) {
        return undefined;
      }
      current = current.next;
    }

    let newNode = new Node(newVal);
    newNode.next = current.next;
    current.next = newNode;
  }

}

module.exports = LinkedList;
