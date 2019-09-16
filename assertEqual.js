var emoji = require('node-emoji');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji.get(':v:') + emoji.get(':v:') + emoji.get(':v:') + ' Assertion passed: ' + actual + ' === ' + expected);
  } else {
    console.log(emoji.get(':-1:') + emoji.get(':-1:') + emoji.get(':-1:') + ' Assertion failed: ' + actual + ' !== ' + expected);
  }
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);

