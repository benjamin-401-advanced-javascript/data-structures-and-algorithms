'use strict';

// import findUnionAndIntersect from './tree-intersection';
const findUnionAndIntersect = require('./tree-intersection');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root1;
let root2;

beforeAll(() => {
  let ten = new Node(10);
  let nine = new Node(9);
  let eight = new Node(8);
  let seven = new Node(7);
  let six = new Node(6);
  let five = new Node(5);
  let four = new Node(4);
  let three = new Node(3);
  ten.left = nine;
  ten.right = eight;
  nine.left = seven;
  nine.right = six;
  eight.left = five;
  eight.right = four;
  seven.left = three;
  root1 = ten;

  let twelve2 = new Node(12);
  let eleven2 = new Node(11);
  let ten2 = new Node(10);
  let nine2 = new Node(9);
  let eight2 = new Node(8);
  let seven2 = new Node(7);
  seven2.left = eight2;
  seven2.right = nine2;
  eight2.left = ten2;
  eight2.right = eleven2;
  ten2.left = twelve2;
  root2 = seven2;
});

describe('Test TREE-INTERSECTION', () => {

  it('Can successfully find the union & intersect of 2 binary trees', () => {
    const result = findUnionAndIntersect(root1, root2);
    expect(result.unionSet.size).toEqual(10);
    expect(result.intersectSet.size).toEqual(4);
  });

});