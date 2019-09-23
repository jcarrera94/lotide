const map = function(array, callback) {
  let newArray = [];
  array.forEach(function(value) {
    newArray.push(callback(value));
  });

  return newArray

}

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];
const test1 = ["ground", "control", "to", "major", "tom"];
const test2 = ["grounded", "controled", "toed", "majored", "tomed"];
const test3 = ["ungrounded", "uncontroled", "untoed", "unmajored", "untomed"];

assertArraysEqual(map(words, word => word), test1);
assertArraysEqual(map(words, word => word + 'ed'), test2);
assertArraysEqual(map(words, word => 'un' + word + 'ed'), test3);


