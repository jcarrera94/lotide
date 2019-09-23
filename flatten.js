const eqArrays = require('./eqArrays');

const flatten =  function(source) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (Array.isArray(source[i])) {
      for (let j = 0; j < source[i].length; j++) {
        newArray.push(source[i][j]);
      }
    } else {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, 6, ['7', '8'], 9, '10']));
assertArraysEqual(flatten([1, 2, [3, 4], 5, 6, ['7', '8'], 9, '10']), [1, 2, 3, 4, 5, 6, '7', '8', 9, '10']);
console.log('----------------------------------');
assertArraysEqual(flatten(['lighthouse', 'labs', ['rocks', '!']]), ['lighthouse', 'labs', 'rocks', '!']);