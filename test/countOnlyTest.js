const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('#CountOnly', () => {
  const items = ['a', 'a', '1', 'a', 1, 'c', 'd', 'd', 'b', 'a', 'e'];
  const specificItems = {a: true, b: false, f: true};
  const result = countOnly(items, specificItems);
  it('returns {a: 4}', () => {
    assert.deepEqual(result.a, 4);
  });
  it('returns {b: undefined}', () => {
    assert.deepEqual(result.b, undefined);
  });
  it('returns {f: undefined}', () => {
    assert.deepEqual(result.f, undefined);
  });
});

