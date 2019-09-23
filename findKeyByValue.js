const findKeyByValue = function(object, value) {
  let result = undefined;

  for (const key in object) {
    if (value === object[key]) {
      result = key;
    }
  }
  return result;
}

module.exports = findKeyByValue;
