let emoji = require('node-emoji');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${emoji.get(':v:')} ${emoji.get(':v:')} ${emoji.get(':v:')} Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emoji.get(':-1:')} ${emoji.get(':-1:')} ${emoji.get(':-1:')} Assertion failed: ${actual} !== ${expected}`);
  }
};

let tail = [];
const getTail = function(array) {

  for (let i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  console.log(tail);
  return tail;
};

const words = ['hola', 'Lighthouse', 'Labs'];
getTail(words);
assertEqual(tail[1], 'Labs');
