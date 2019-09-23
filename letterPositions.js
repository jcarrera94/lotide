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

module.exports = letterPositions;

console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
console.log(letterPositions('lighthouse in the house'));