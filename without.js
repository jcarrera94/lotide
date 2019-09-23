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


