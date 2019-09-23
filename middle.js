
const middle = function(input) {
  let resultArray = [];
  let middleIndex = Math.floor(input.length/2);
  if (input.length <= 2) {
    return resultArray;
  }
  if (input.length % 2 !== 0) {
    resultArray = input.slice(middleIndex, middleIndex + 1);
  } else {
    resultArray = input.slice(middleIndex - 1, middleIndex + 1);
  }
  return resultArray;
}

module.exports = middle;


