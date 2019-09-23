const without = require('../without');
const assert = require('chai').assert;

describe('#Without', () => {
  const words1 = ['1', '2', '3'];
  it(`returns ['1', '2'] for undesired values of [1, 2, '3'] in ['1', '2', '3']`, () => {
    assert.deepEqual(without(words1, [1, 2, '3']), ['1', '2']);
  });

});
