'use strict';

const LinkedList = require('../linkedList/linked-list')

class Queue {
  constructor() {
    this.front = null;
    this.storage = new LinkedList();
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

  isEmpty() {
    return this.storage.head ? true : false;
  }

  peek() {
    return this.storage.head ? this.storage.head.value : null;
  }
}


class Stack {
  constructor() {
    this.top = null;
    this.storage = new LinkedList();
  }

  push(value) {
    this.storage.insert(value);
    this.top = this.peek();
    return this.top;
  }

  pop() {
    let returnValue = this.storage.removeHead();
    this.top = this.peek();
    return returnValue;
  }

  isEmpty() {
    return this.storage.head ? true : false;
  }

  peek() {
    return this.storage.head ? this.storage.head.value : null;
  }

}

// const stack = new Stack();
// console.log(stack.peek())


module.exports.stack = Stack;
module.exports.queue = Queue;