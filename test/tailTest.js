const getTail = require('../tail');
const assertEqual = require('../assertEqual');


const words = ['hola', 'Lighthouse', 'Labs'];

assertEqual(getTail(words)[1], 'Labs');