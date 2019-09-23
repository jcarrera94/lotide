const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#Flatten', () => {
  const arr = [1, 2, [3, 4], 5, 6, ['7', '8'], 9, '10'];
  it(`returns [1, 2, 3, 4, 5, 6, '7', '8', 9, '10'] for [1, 2, [3, 4], 5, 6, ['7', '8'], 9, '10']`, () => {
    assert.deepEqual(flatten(arr), [1, 2, 3, 4, 5, 6, '7', '8', 9, '10']);
  });
});
