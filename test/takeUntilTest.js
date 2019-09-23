const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe('#TakeUntil', () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const callback = x => x < 0;
  it('returns [1, 2, 5, 7, 2] when callback calls for numbers in the array until it reaches a -ve number', () => {
    assert.deepEqual(takeUntil(data1, callback), [1, 2, 5, 7, 2]);
  });
});


