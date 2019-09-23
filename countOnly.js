const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]){
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }  
  }
  return results;
}

module.exports = countOnly;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

const items = ['a', 'a', '1', 'a', 1, 'c', 'd', 'd', 'b', 'a', 'e'];
const specificItems = {
  a: true,
  d: true,
  b: false,
  f: true,
};

console.log(countOnly(items, specificItems));
