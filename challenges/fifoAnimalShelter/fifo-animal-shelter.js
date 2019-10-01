'use strict';

class AnimalShelter {
  constructor() {
    this.shelter = []
  }

  enque(animal) {
    this.shelter.push(animal);
  }

  dequeue(pref) {
    if (pref !== 'cat' && pref !== 'dog') {
      return this.shelter.shift();
    }
    let q1 = this.shelter;
    let q2 = [];
    // let { preferedAnimal, remainingAnimals } = this.dequeueHelper(pref, q1, q2);
    let result = this.dequeueHelper(pref, q1, q2);

    this.shelter = result.q2;
    return result.animal;
  }

  dequeueHelper(pref, q1, q2) {
    // base case
    if (!q1.length) {
      return { animal: null, q2: q2 };
    }

    let animal = q1.shift();

    if (animal === pref) {
      q2 = [...q2, ...q1];
      return { animal, q2 };

    } else {
      q2.push(animal);
      return this.dequeueHelper(pref, q1, q2);

    }
  }

}

module.exports = AnimalShelter;