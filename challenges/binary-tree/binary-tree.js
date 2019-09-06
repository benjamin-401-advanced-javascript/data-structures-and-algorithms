'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues.js').stack;

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(node) {
    this.root = node;
  }

  newNode(value) {
    return new Node(value);
  }

  findDistanceBetween(root, toValue) {
    if (!root) {
      return -1;
    }

    let dist = -1

    const L = this.findDistanceBetween(root.left, toValue);
    const R = this.findDistanceBetween(root.right, toValue);

    // if current root is the value return dist + 1 or if let or right returned a number pass it along with +1
    if ((root.value === toValue) || (L >= 0) || (R >= 0)) {
      return dist + 1;
    }

    return dist;
  }

  /**
   *
   * @memberof Tree
   * @param {Node} takes a Node type for binary tree
   * @returns {Stack}
   */
  getLeaves(root) {
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

}




module.exports = BinaryTree;
