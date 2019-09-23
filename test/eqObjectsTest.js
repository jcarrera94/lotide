const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  const obj1 = { c: "1", d: ["2", 3] };
  const obj2 = { d: ["2", 3], c: "1" };
  it(`returns true for ${obj1} and ${obj2}`, () => {
    assert.deepEqual(eqObjects(obj1, obj2), true);
  });
});