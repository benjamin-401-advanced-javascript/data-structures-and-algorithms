'use strict';

const leftJoin = require('./left-join');

let map1 = new Map();
let map2 = new Map();
let map3 = new Map();

beforeAll(() => {
  map1.set('fond', 'enamored')
    .set('wrath', 'anger')
    .set('diligent', 'employed')
    .set('outfit', 'garb')
    .set('guide', 'usher');
  map2.set('fond', 'averse')
    .set('wrath', 'delight')
    .set('diligent', 'idle')
    .set('guide', 'follow')
    .set('flow', 'jam');
});

describe('Tests Link List Functionality', () => {

  it('Can successfully exclude right-hand map values', () => {
    const expectedResult = [['fond', 'enamored', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb'],
      ['guide', 'usher', 'follow']];

    expect(leftJoin(map1, map2)).toEqual(expectedResult);
  });

  it('Can successfully deal with right-hand empty Maps', () => {
    const expectedResult = [['fond', 'enamored'], 
      ['wrath', 'anger'], 
      ['diligent', 'employed'], 
      ['outfit', 'garb'], 
      ['guide', 'usher']];

    expect(leftJoin(map1, map3)).toEqual(expectedResult);
  });

  it('Can successfully deal with left-hand empty Maps', () => {

    expect(leftJoin(map3, map2)).toEqual([]);
  });

});






