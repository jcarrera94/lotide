const findKey = function(obj, callback){
  for (let key in obj) {
    if (callback(obj[key].stars)) {
      return key;
    }
  }
}

module.exports = findKey;
