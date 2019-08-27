'use strict';

const Stack = require('../linkedList/linked-list')

class PseudoQueue {

  constructor() {
    this.front = null;
    this.storage = new Stack();
  }

  enqueue(value) {
    this.storage.append(value);
    this.front = this.peek();
    return this.storage.head.value;
  }

  dequeue() {
    let returnValue = this.storage.removeHead();
    this.front = this.peek();
    return returnValue;
  }
}