const map = require('../map');
const assert = require('chai').assert;

describe('#Map', () => {
  const words = ["ground", "control", "to", "major", "tom"];
  callback = word => word + 'ed';
  it(`adds 'ed' to every string in ["ground", "control", "to", "major", "tom"]`, () => {
    assert.deepEqual(map(words, callback), ["grounded", "controled", "toed", "majored", "tomed"]);
  });
  
});
