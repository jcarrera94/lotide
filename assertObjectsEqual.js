let emoji = require('node-emoji');

const eqArrays = function(arrayA, arrayB) {
  let result = null;

  if (arrayA.length !== arrayB.length) {
    return false;
  }
  if (arrayA.length === 0 && arrayB.length === 0) {
    result = true;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] === arrayB[i]) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
}
  
  
const eqObjects = function(object1, object2) {
  let result = null;
  const arrayKeys1 = [];
  const arrayKeys2 = [];

  for (const keys in object1) {
    arrayKeys1.push(keys);
  }
  for (const keys in object2) {
    arrayKeys2.push(keys);
  }
  if (arrayKeys1.length !== arrayKeys2.length) {
    return false;
  }
  
  for (const keys in object1) {
    
    if (object2[keys] === undefined) {
      return false;
    }
    
    if(!Array.isArray(object1[keys])) {
      if (object1[keys] === object2[keys]) {
        result = true;
      } else {
        return false;
      }
    }
    if(Array.isArray(object1[keys])) {
      console.log(object1[keys], object2[keys]);
      result = eqArrays(object1[keys], object2[keys]);
    }
    if (result === false) {
      return result;
    }
  }
  return result;
}

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  let assertion = eqObjects(object1, object2);
  if (assertion) {
    console.log(`${emoji.get(':white_check_mark:')} ${emoji.get(':v:')} Assertion passed! ${inspect(object1)} => ${inspect(object2)}`);
  } else {
    console.log(`${emoji.get(':red_circle:')} ${emoji.get(':-1:')} Assertion failed! ${inspect(object1)} => ${inspect(object2)}`)
  }
}

let obj1 = {d: [1, 2], c: ['1', '2']};
let obj2 = {c: ['1', '2'], d: [1, 2]};
assertObjectsEqual(obj1, obj2);