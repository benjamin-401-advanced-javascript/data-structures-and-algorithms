'use strict';

const repeated = require('./repeated-word');

describe('Test Repeated Word', () =>{

  it('can find first reapeated word', () => {
    const testString = 'Once upon a time, there was a brave princess who...';
    expect(repeated(testString)).toBe('a');
  });

  it('can find first reapeated word in large paragraph', () => {
    const testString = 'it was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(repeated(testString)).toBe('of');
  });

  it('can find first reapeated word', () => {
    const testString = 'Once upon a time, there was the bravest princess who...';
    expect(repeated(testString)).toBe(null);
  });

});