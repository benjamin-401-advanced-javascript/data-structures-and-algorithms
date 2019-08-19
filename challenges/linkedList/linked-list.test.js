'use strict';

const LinkedList = require('./linked-list')

describe('Tests Link List Functionality', () => {

  it('Can successfully instantiate an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
  })

  it('Can properly insert into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('¯\_(ヅ)_/¯')
    expect(linkedList.head.value).toEqual('¯\_(ヅ)_/¯')
  })

  it('The head property will properly point to the first node in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(10)
    linkedList.insert(20)
    expect(linkedList.head.value).toEqual(20)
  })

  it('Can properly insert multiple nodes into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(10)
    linkedList.insert(20)
    expect(linkedList.head.value).toEqual(20)
  })

  it('Will return true when finding a value within the linked list that exists', () => {
    const linkedList = new LinkedList();
    linkedList.insert(10)
    linkedList.insert(20)
    linkedList.insert(30)
    expect(linkedList.includes(20)).toEqual(true)
  })

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const linkedList = new LinkedList();
    linkedList.insert(10)
    linkedList.insert(20)
    linkedList.insert(30)
    expect(linkedList.includes(50)).toEqual(false)
  })

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(10);
    linkedList.insert(20);
    linkedList.insert('jappy');
    expect(linkedList.toString()).toEqual('jappy 20 10 ');
  })

})





