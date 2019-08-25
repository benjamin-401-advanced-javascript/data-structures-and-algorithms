'use strict';

const s_q = require('./stacks-and-queues')
const Queue = s_q.queue;
const Stack = s_q.stack;

describe('Tests Stack and Queues functionality', () => {

  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push('happy');
    expect(stack.top).toEqual('happy');
  })

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push('happy');
    stack.push('crappy');
    expect(stack.top).toEqual('crappy');
  })

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push('happy');
    stack.push(5);
    expect(stack.top).toEqual(5);
    stack.pop();
    expect(stack.top).toEqual('happy');
  })

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push('happy');
    stack.push(5);
    expect(stack.top).toEqual(5);
    stack.pop();
    expect(stack.top).toEqual('happy');
    stack.pop();
    expect(stack.top).toEqual(null);
  })

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push('happy');
    stack.push(5);
    expect(stack.peek()).toEqual(5);
  })

  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toEqual(null);
  })

  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(5)
    expect(queue.front).toEqual(5);
  })

  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(5)
    queue.enqueue(6)
    expect(queue.front).toEqual(5);
  })

  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(5)
    queue.enqueue(6)
    expect(queue.front).toEqual(5);
    expect(queue.dequeue()).toEqual(5);

  })

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(5)
    queue.enqueue(6)
    expect(queue.peek()).toEqual(5);
  })

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(5)
    queue.enqueue(6)
    queue.dequeue()
    queue.dequeue()
    expect(queue.peek()).toEqual(null);
  })

  it('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.front).toEqual(null);
  })

})



