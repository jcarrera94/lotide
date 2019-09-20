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
  const arrayKeys1 = Object.keys(object1);
  const arrayKeys2 = Object.keys(object2);

  if (arrayKeys1.length !== arrayKeys2.length) {
    return false;
  }
  
  for (let keys in object1) {
    
    if (object2[keys] === undefined) {
      return false;
    }
    if (!Array.isArray(object1[keys]) && typeof(object1[keys]) === 'object') {
      if(!eqObjects(object1[keys], object2[keys])) {
        return false;
      }
    } else if (Array.isArray(object1[keys])) {
      console.log(object1[keys], object2[keys]);
      console.log('arr');
      return eqArrays(object1[keys], object2[keys]);
    } else {
      if (object1[keys] !== object2[keys]) {
        return false;
      }
    }
  }
  return true;
}

// let ab = { a: "1", b: "2" };
// let ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba));

// console.log('-------------------');

// // let ab1 = { a: "1", b: "2" };
// // let ba1 = { b: "2", c: "1" };
// // console.log(eqObjects(ab1, ba1));

// // console.log('-------------------');

// // let ab2 = { a: "1", c: "2" };
// // let ba2 = { b: "2", a: "1" };
// // console.log(eqObjects(ab2, ba2));

// // console.log('-------------------');

// // const cd = { c: "1", d: ["2", 3] };
// // const dc = { d: ["2", 3], c: "1" };
// // console.log(eqObjects(cd, dc)); 

// // const cd2 = { c: "1", d: ["2", 3, 4] };
// // console.log(eqObjects(cd, cd2)); 

// let obj1 = {a: [1, 2], c: ['1', '2']};
// let obj2 = {c: ['1', '2'], a: [1, 2]};
// console.log(eqObjects(obj1, obj2)); 

console.log(eqObjects({ a: { z: 1 }, b: 2, c:{ d: { e: { f: { f: 3}}}} }, 
                      { a: { z: 1 }, b: 2, c:{ d: { e: { f: { g: 2}}}} })) // => false

console.log(eqObjects({aa: { a: { y: 0, z: 1 }, b: 2 }, bb: { c: { d: 1 }, e: 2, }}, 
                      {aa: { a: { y: 0, z: 1 }, b: 2 }, bb: { c: { d: 1 }, e: 2, }})); // => true 

console.log(eqObjects({ a: { b: { c: { d: 3}}}},
                      { a: { b: { c: { hello: 3}}}}));