const map = function(array, callback) {
  let newArray = [];
  array.forEach(function(value) {
    newArray.push(callback(value));
  });

  return newArray

}

module.exports = map;



