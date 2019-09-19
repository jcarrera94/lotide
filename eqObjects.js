let emoji = require('node-emoji');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${emoji.get(':white_check_mark:')} ${emoji.get(':v:')} Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emoji.get(':red_circle:')} ${emoji.get(':-1:')} Assertion failed: ${actual} !== ${expected}`);
  }
};

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

let ab = { a: "1", b: "2" };
let ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

console.log('-------------------');

let ab1 = { a: "1", b: "2" };
let ba1 = { b: "2", c: "1" };
console.log(eqObjects(ab1, ba1));

console.log('-------------------');

let ab2 = { a: "1", c: "2" };
let ba2 = { b: "2", a: "1" };
console.log(eqObjects(ab2, ba2));

console.log('-------------------');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); 

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); 

let obj1 = {d: [1, 2], c: ['1', '2']};
let obj2 = {c: ['1', '2'], a: [1, 2]};
console.log(eqObjects(obj1, obj2)); 


//let abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(abc, ab));
