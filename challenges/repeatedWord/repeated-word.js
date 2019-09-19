'use strict';

const repeated  = (string) => {
  let result = null;
  const words = string.split(' ');
  const set = new Set();
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (set.has(word)){
      result = word;
    } else {
      set.add(word);
    }
  }
  return result;
};

module.exports = repeated;