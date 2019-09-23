const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe('#CountLetters', () => {
  let counted = countLetters('lighthouse labs')
  it(`returns {l: 2}`, () => {
    assert.strictEqual(counted.l, 2);
  });
});