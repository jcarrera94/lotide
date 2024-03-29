const middle = require('../middle')
const assert = require('chai').assert;

describe('#Middle', () => {
  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
})

