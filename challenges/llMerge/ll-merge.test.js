'use strict';

const LL = require('../linkedList/linked-list')
const merge = require('./ll-merge')

describe('Tests merge 2 linked lists functionality', () => {

  it('Can successfully merge two linked lists', () => {
    let list1 = new LL();
    list1.append(1)
    list1.append(3)
    list1.append(5)
    let list2 = new LL();
    list2.append(2)
    list2.append(4)
    list2.append(6)
    list1 = merge(list1, list2)

    expect(list1.toString()).toBe('1 2 3 4 5 6 ');
  })

  it('Can successfully merge two different sized linked lists', () => {
    let list1 = new LL();
    list1.append(1)
    list1.append(3)
    list1.append(5)
    let list2 = new LL();
    list2.append(2)
    list2.append(4)
    list2.append(6)
    list2.append(12)
    list2.append(14)
    list2.append(16)
    list1 = merge(list1, list2)

    expect(list1.toString()).toBe('1 2 3 4 5 6 12 14 16 ');
  })

})