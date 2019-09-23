
const countLetters = function (string) {
  const result = {};
  const letters = string.split(' ').join('');

  for (const letter of letters) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
}

module.exports = countLetters;


