const getHead = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(getHead([5]), 5);
assertEqual(getHead([]), "Labs");