const getHead = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(getHead([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(getHead(['5']), '5'); 
  });
  it("returns 'Labs' for ['Labs']", () => {
    assert.deepEqual(getHead(['Labs']), 'Labs'); 
  });
  it("returns undefined for []", () => {
    assert.deepEqual(getHead([]), undefined); 
  });
  
});
