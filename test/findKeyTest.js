const findKey = require('../findKey');
const assert = require('chai').assert;

describe('#FindKey', () => {
  const obj = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  const callback = x => (x === 2);
  it(`returns 'noma' for key value of 2 in ${obj}`, () => {
    assert.deepEqual(findKey(obj, callback), 'noma');
  });

});

