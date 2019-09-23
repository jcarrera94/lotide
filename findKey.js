const findKey = function(obj, callback){
  for (let key in obj) {
    if (callback(obj[key].stars)) {
      return key;
    }
  }
}

module.exports = findKey;

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(obj, x => (x === 2)), 'noma');
