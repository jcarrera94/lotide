const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#LetterPositions', () => {
  it(`returns [2, 3] for 'l'`, () => {
    assert.deepEqual(letterPositions('hello').l, [2, 3]);
  });
});

