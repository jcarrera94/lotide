const getTail = function(array) {
  let tail = [];
  if (array.length <= 1) {
    return tail;
  }
  for (let i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
};

module.exports = getTail;