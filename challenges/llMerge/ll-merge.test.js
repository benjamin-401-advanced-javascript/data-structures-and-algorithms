'use strict';

const s_q = require('./stacks-and-queues')
const Queue = s_q.queue;
const Stack = s_q.stack;

describe('Tests Stack and Queues functionality', () => {

  it('Can successfully merge two stacks', () => {
    const stack = new Stack();
    stack.push('happy');
    expect(stack.top).toEqual('happy');
  })

})