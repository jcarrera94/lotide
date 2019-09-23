let emoji = require('node-emoji');

const eqArrays = function(arrayA, arrayB) {
  let result = null;

  if (arrayA.length !== arrayB.length) {
    return false;
  }
  if (arrayA.length === 0 && arrayB.length === 0) {
    result = true;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] === arrayB[i]) {
      result = true;
    } else {
      return false;
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


const takeUntil = function(array, callback) {
  let result = [];
  for (let x of array) {
    if(callback(x)) {
      return result;
    }
    result.push(x);
  }
  return result;
}

module.exports = takeUntil;


