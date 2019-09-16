var emoji = require('node-emoji');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${emoji.get(':v:')} ${emoji.get(':v:')} ${emoji.get(':v:')} Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emoji.get(':-1:')} ${emoji.get(':-1:')} ${emoji.get(':-1:')} Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  let index0 = array[0];
  return index0;
}

assertEqual(head([5]), 5);
assertEqual(head([]), "Labs");