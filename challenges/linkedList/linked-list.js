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

  /**
   * adds a node to front of linked list
   * @param {*} value
   * @memberof LinkedList
   */
  insert(value) {
    const newHead = new Node(value);

    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }



  /**
   *
   *
   * @memberof LinkedList
   */
  dedupe() {
    let current = this.head;
    let last = null;
    let seenValues = new Set();
    while (current) {
      if (seenValues.has(current.value)){
        last.next = current.next;
      } else {
        seenValues.add(current.value);
      }

      last = current;
      current = current.next;
    }
    
  }


  /**
   * removes node at head and returns it's value
   * @returns value of node at head
   * @memberof LinkedList
   */
  removeHead() {
    if (!this.head) {
      return null;
    } else {
      let tempNode = this.head;
      this.head = tempNode.next;
      tempNode.next = null;
      return tempNode.value;
    }
  }

  /**
   * Linked List include value
   * @param {*} value
   * @returns
   * @memberof LinkedList
   */
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

  /**
   * prints out the values of the linked list as a string using JS toSting() method
   * @returns
   * @memberof LinkedList
   */
  toString() {
    let string = '';
    let current = this.head;
    while (current !== null) {
      string = string.concat(current.value.toString(), ' ')
      current = current.next;
    }
    return string;
  }

  /**
   * adds node with value to end of linked list
   * @param {*} value
   * @memberof LinkedList
   */
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

  /**
   * inserts newVal before value
   * @param {*} value
   * @param {*} newVal
   * @returns
   * @memberof LinkedList
   */
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

  /**
   * inserts newVal after value
   * @param {*} value
   * @param {*} newVal
   * @returns
   * @memberof LinkedList
   */
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

  /**
   * finds the value that's k (number) from the end of the link list counting from 0
   * @param {*} k
   * @returns
   * @memberof LinkedList
   */
  kthFromEnd(k) {
    let current = this.head;
    // sanity check
    if (!current || k < 0) {
      return null;
    }
    if (k === 0 && !current.next) {
      return current.value;
    }

    let result = new Node(null);
    result.next = this.head;

    let steps = 1;

    while (current.next) {
      if (steps === k) {
        result = result.next;
      } else {
        steps += 1;
      }
      current = current.next;
    }
    return result.value;
  }

  /**
   * reverses the linked list
   * @memberof LinkedList
   */
  reverse() {
    let current = this.head;
    let previousNode = null;
    let nextNode = current.next;
    while (current) {
      // console.log('previousNode', previousNode.value, 'current', current.value, 'nextNode', nextNode.value);
      current.next = previousNode;
      previousNode = current;
      current = nextNode;
      if (current) {
        nextNode = current.next;
      }
    }
    this.head = previousNode;
  }

}

module.exports = LinkedList;
