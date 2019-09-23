const without = function(source, undesired) {
  let map = {};
  let newArray = [];
  for (let i = 0; i < undesired.length; i++) {
    map[undesired[i]] = undesired[i];
  }
  for (let i = 0; i < source.length; i++) {
    if (map[source[i]] === undefined) {
      newArray.push(source[i]);
    } else if (map[source[i]] !== source[i]) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

module.exports = without;

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]); 
console.log('------------------------------------');
const words1 = ['1', '2', '3'];
console.log(without(words1, [1, 2, '3']));
assertArraysEqual(words1, ['1', '2', '3']); 
console.log('------------------------------------');
const words2 = ['hola', 1, 'hi', 3, 4, 'bonjour'];
console.log(without(words2, [1, 'bonjour', '4', 'hi']));
assertArraysEqual(words2, ['hola', 1, 'hi', 3, 4, 'bonjour']); 

