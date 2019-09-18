let emoji = require('node-emoji');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${emoji.get(':white_check_mark:')} ${emoji.get(':v:')} Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emoji.get(':red_circle:')} ${emoji.get(':-1:')} Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  const result = {};

  for (const letter of string.split(' ').join('')) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
}

console.log(countLetters("lighthouse in the house"));

