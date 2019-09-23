
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

module.exports = eqArrays;

