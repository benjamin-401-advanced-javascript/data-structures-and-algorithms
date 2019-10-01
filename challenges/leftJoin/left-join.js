'use strict';

module.exports = function leftJoinMaps(map1, map2) {

  const resultArr = [];

  map1.forEach((value, key) => {
    const tempArr = [];

    tempArr.push(key, value);
    const map2Value = map2.get(key);
    if (map2Value) {
      tempArr.push(map2Value);
    }

    resultArr.push(tempArr);

  });

  return resultArr;

};
