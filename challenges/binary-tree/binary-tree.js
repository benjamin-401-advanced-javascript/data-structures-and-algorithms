'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues.js').stack;

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 *
 * @memberof Tree
 * @param {Node} takes a Node type for binary tree
 * @returns {Stack}
 */
module.exports.getLeaves = (root) => {
  const traverseStack = new Stack();
  const returnStack = new Stack();
  traverseStack.push(root);
  while (!traverseStack.isEmpty()) {
    const node = traverseStack.pop();
    if (!node.left && !node.right) {
      returnStack.push(node.value)
    }
    if (node.left) { traverseStack.push(node.left) }
    if (node.right) { traverseStack.push(node.right) }
  }
  return returnStack;
}



module.exports.node = Node;
