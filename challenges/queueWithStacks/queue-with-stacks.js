'use strict';

const s_q = require('../stacksAndQueues/stacks-and-queues')
const Stack = s_q.stack;

class PseudoQueue {

  constructor() {
    this.otherStack = new Stack();
    this.currentStack = new Stack();
  }

  enqueue(value) {
    const temp = this.currentStack.push(value);
    console.log('ENQ', temp);
    return temp;
  }

  dequeue() {
    // flip stacks, get new top, flip stacks back
    this.flipStacks()
    const returnValue = this.otherStack.pop()
    this.flipStacks()
    return returnValue;
  }

  flipStacks() {
    while (this.currentStack.peek()) {
      this.otherStack.push(this.currentStack.pop())
    }
  }

}

module.exports = PseudoQueue;