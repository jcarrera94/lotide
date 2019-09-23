
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

module.exports = eqArrays;

