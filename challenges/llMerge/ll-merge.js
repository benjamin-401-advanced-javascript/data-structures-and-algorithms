'use strict'


// merge lists
module.exports = (list1, list2) => {
  let current1 = list1.head;
  let current2 = list2.head;

  if (!current1) {
    list1.head = current2;
    return list1;
  }

  let store1 = current1.next;
  let store2 = current2.next;
  let flag = true;

  while (flag) {

    if (!current2) {
      flag = false;
      break;
    }
    store1 = current1.next;
    current1.next = current2;
    current1 = store1;

    if (!current1) {
      flag = false;
      break;
    }
    store2 = current2.next;
    current2.next = current1;
    current2 = store2;
  }

  return list1;
}