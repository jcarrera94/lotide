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

const letterPositions = function(sentence) {
  const result = {}
  const letters = sentence.split(' ').join('');
  
  for (const letter of letters) {
    let array = [];
    //console.log(`the letter is:`, letter);
    for (let i = 0; i < sentence.length; i++) {
      //console.log(`and this is:`, sentence[i]);
      if (letter === sentence[i]) {
        //console.log(letter, sentence[i]);
        array.push(i);
      }
    }
    result[letter] = array;
  }

  return result;
}

console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
console.log(letterPositions('lighthouse in the house'));