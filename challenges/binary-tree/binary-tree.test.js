'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues.js').stack;
const BinaryTree = require('./binary-tree.js');
const getLeaves = require('./binary-tree.js').getLeaves;
let root;

const tree = new BinaryTree();
beforeAll(() => {
  let ten = tree.newNode(10);
  let nine = tree.newNode(9);
  let eight = tree.newNode(8);
  let seven = tree.newNode(7);
  let six = tree.newNode(6);
  let five = tree.newNode(5);
  let four = tree.newNode(4);
  let three = tree.newNode(3);
  ten.left = nine;
  ten.right = eight;
  nine.left = seven;
  nine.right = six;
  eight.left = five;
  eight.right = four;
  seven.left = three;
  root = ten;
})

describe('Tests Queue using Stacks functionality', () => {

  it('Can successfully find leaves', () => {
    const testStack = new Stack();
    testStack.push(4);
    testStack.push(5);
    testStack.push(6);
    testStack.push(3);
    const stack = tree.getLeaves(root);
    expect(stack).toEqual(testStack);
  })

  it('Can successfully find distance from root to given node recursively', () => {
    expect(tree.findDistanceBetween(root, 7)).toEqual(2);
  })

})