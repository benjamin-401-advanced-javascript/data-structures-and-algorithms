'use strict';

// import findUnionAndIntersect from './tree-intersection';
const AnimalShelter = require('./fifo-animal-shelter');

describe('Test Animal Shelter', () => {

  it('Can get any animal from shelter', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enque('bird');
    animalShelter.enque('cat');
    animalShelter.enque('dog');
    animalShelter.enque('cat');
    animalShelter.enque('horse');
    expect(animalShelter.dequeue()).toEqual('bird');
    expect(animalShelter.shelter).toEqual(['cat', 'dog', 'cat', 'horse']);
  });

  it('Can get preferred animal from shelter', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enque('bird');
    animalShelter.enque('cat');
    animalShelter.enque('dog');
    animalShelter.enque('cat');
    animalShelter.enque('horse');
    expect(animalShelter.dequeue('dog')).toEqual('dog');
    expect(animalShelter.shelter).toEqual(['bird', 'cat', 'cat', 'horse']);
  });

  it('Can get preferred animal from shelter', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enque('bird');
    animalShelter.enque('cat');
    animalShelter.enque('cat');
    animalShelter.enque('horse');
    expect(animalShelter.dequeue('dog')).toEqual(null);
    expect(animalShelter.shelter).toEqual(['bird', 'cat', 'cat', 'horse']);
  });

});