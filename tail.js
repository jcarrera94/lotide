let tail = [];
const getTail = function(array) {

  for (let i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
};

module.exports = getTail;