const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('#FindKeyByValue', () => {
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it(`returns 'drama' for 'The Wire`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it(`returns undefined for 'That '70s show'`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s show"), undefined);
  });

});
