const getTail = require('../tail');
const assert = require('chai').assert;

describe('#Tail', () => {
  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(getTail([1, 2, 3]), [2, 3]);
  });
  it(`returns ['Lighthouse', 'Labs'] for ['hola', 'Lighthouse', 'Labs']`, () => {
    assert.deepEqual(getTail(['hola', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it(`returns []  for ['hola']`, () => {
    assert.deepEqual(getTail(['hola']), []);
  });
});
