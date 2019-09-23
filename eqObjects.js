const eqArrays = require('./eqArrays');
  
  
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
      return eqArrays(object1[keys], object2[keys]);
    } else {
      if (object1[keys] !== object2[keys]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = eqObjects;
