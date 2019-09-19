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

const map = function(array, callback) {
  let newArray = [];
  array.forEach(function(value) {
    newArray.push(callback(value));
  });

  return newArray

}
const words = ["ground", "control", "to", "major", "tom"];
const test1 = ["ground", "control", "to", "major", "tom"];
const test2 = ["grounded", "controled", 3, "majored", "tomed"];
const test3 = ["ungrounded", "controled", "untoed", "unmajored", "untomed"];

assertArraysEqual(map(words, word => word), test1);
assertArraysEqual(map(words, word => word + 'ed'), test2);
assertArraysEqual(map(words, word => 'un' + word + 'ed'), test3);


