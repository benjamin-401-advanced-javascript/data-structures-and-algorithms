'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues.js').stack;
const BinaryNode = require('./binary-tree.js').node;
const getLeaves = require('./binary-tree.js').getLeaves;
let root;

beforeAll(() => {
  let ten = new BinaryNode(10);
  let nine = new BinaryNode(9);
  let eight = new BinaryNode(8);
  let seven = new BinaryNode(7);
  let six = new BinaryNode(6);
  let five = new BinaryNode(5);
  let four = new BinaryNode(4);
  let three = new BinaryNode(3);
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
    const stack = getLeaves(root);
    expect(stack).toEqual(testStack);
  })

})