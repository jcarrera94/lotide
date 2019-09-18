let emoji = require('node-emoji');

const eqArrays = function(arrayA, arrayB) {
  let result = null;

  if (arrayA.length !== arrayB.length) {
    result = false;
  }
  if (arrayA.length === 0 && arrayB.length === 0) {
    result = true;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] === arrayB[i]) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

const assertArraysEqual = function(array1, array2) {
  let assertion = eqArrays(array1, array2);
  if (assertion) {
    console.log(`${emoji.get(':white_check_mark:')} ${emoji.get(':v:')} Assertion passed!`);
  } else {
    console.log(`${emoji.get(':red_circle:')} ${emoji.get(':-1:')} Assertion failed!`)
  }
}

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

console.log(flatten([1, 2, [3, 4], 5, 6, ['7', '8'], 9, '10']));
assertArraysEqual(flatten([1, 2, [3, 4], 5, 6, ['7', '8'], 9, '10']), [1, 2, 3, 4, 5, 6, '7', '8', 9, '10']);
console.log('----------------------------------');
assertArraysEqual(flatten(['lighthouse', 'labs', ['rocks', '!']]), ['lighthouse', 'labs', 'rocks', '!']);