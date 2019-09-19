'use strict';

const LinkedList = require('./linked-list');

describe('Tests Link List Functionality', () => {

  it('Can successfully instantiate an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
  });

  it('Can properly insert into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('¯\_(ヅ)_/¯');
    expect(linkedList.head.value).toEqual('¯\_(ヅ)_/¯');
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(10);
    linkedList.insert(20);
    expect(linkedList.head.value).toEqual(20);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(10);
    linkedList.insert(20);
    expect(linkedList.head.value).toEqual(20);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const linkedList = new LinkedList();
    linkedList.insert(10);
    linkedList.insert(20);
    linkedList.insert(30);
    expect(linkedList.includes(20)).toEqual(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const linkedList = new LinkedList();
    linkedList.insert(10);
    linkedList.insert(20);
    linkedList.insert(30);
    expect(linkedList.includes(50)).toEqual(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(10);
    linkedList.insert(20);
    linkedList.insert('jappy');
    expect(linkedList.toString()).toEqual('jappy 20 10 ');
  });

  it('Can successfully add a node to the end of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(10);
    linkedList.insert(20);
    linkedList.insert(30);
    linkedList.append(40);
    expect(linkedList.toString()).toEqual('30 20 10 40 ');
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(40);
    expect(linkedList.toString()).toEqual('10 20 30 40 ');
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(40);
    linkedList.append(50);
    linkedList.insertBefore(40, 30);
    expect(linkedList.toString()).toEqual('10 20 30 40 50 ');
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.insertBefore(10, 0);
    expect(linkedList.toString()).toEqual('0 10 20 ');
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(40);
    linkedList.insertAfter(20, 30);
    expect(linkedList.toString()).toEqual('10 20 30 40 ');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.insertAfter(30, 40);
    expect(linkedList.toString()).toEqual('10 20 30 40 ');
  });

  it('Where k is greater than the length of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(40);
    linkedList.append(50);
    expect(linkedList.kthFromEnd(5)).toEqual(null);
  });

  it('Where k and the length of the list are the same', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(40);
    linkedList.append(50);
    expect(linkedList.kthFromEnd(4)).toEqual(10);
  });

  it('Where k is not a positive integer', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(40);
    linkedList.append(50);
    expect(linkedList.kthFromEnd(-3)).toEqual(null);

  });

  it('Where the linked list is of a size 1', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    expect(linkedList.kthFromEnd(0)).toEqual(10);

  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(40);
    linkedList.append(50);
    expect(linkedList.kthFromEnd(2)).toEqual(30);
  });

  it('Can reverse a link list in place', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(40);
    linkedList.append(50);
    linkedList.reverse();
    expect(linkedList.toString()).toEqual('50 40 30 20 10 ');
  });

  it('can delete duplicates', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(20);
    linkedList.append(40);
    linkedList.dedupe();
    expect(linkedList.toString()).toEqual('10 20 30 40 ');
  });

  it('can delete duplicates when there are none', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(40);
    linkedList.dedupe();
    expect(linkedList.toString()).toEqual('10 20 30 40 ');
  });

});






