'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues').stack;


/**
 * @param string input
 * @returns boolean 
 */
module.exports = (input) => {
  let stack = new Stack();

  for (let i = 0; i < input.length; i++) {
    let k = input[i];
    if (k === '(' || k === '{' || k === '[') {
      stack.push(k);
    }
    switch (k) {
      case ')':
        if (stack.pop() !== '(') { return false }
        break;
      case '}':
        if (stack.pop() !== '{') { return false }
        break;
      case ']':
        if (stack.pop() !== '[') { return false }
        break;
      default:
        break;
    }
  }
  console.log('result', stack.isEmpty());
  return stack.isEmpty()
}

