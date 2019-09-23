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

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sci_fi');