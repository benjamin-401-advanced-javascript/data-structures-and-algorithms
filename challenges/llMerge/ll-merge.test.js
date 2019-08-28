'use strict';

const LL = require('../linkedList/linked-list')
const merge = require('./ll-merge')

describe('Tests merge 2 linked lists functionality', () => {

  it('Can successfully merge two linked lists', () => {
    let list1 = new LL();
    list1.insert(1)
    list1.insert(3)
    list1.insert(5)
    let list2 = new LL();
    list2.insert(2)
    list2.insert(4)
    list2.insert(6)
    list1 = merge(list1, list2)

    expect(list1).toBe('1,2,3,4,5,6');
  })

})