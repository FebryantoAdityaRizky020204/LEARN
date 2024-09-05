const rumus = require('./math');
const cats = require('./cats/index.js');

console.log(rumus.penjumlahan(1, 2));
console.log(rumus.keliling(2));
console.log(rumus.luas(2));
console.log(rumus.PI);


// Bisa Juga Begini
const { penjumlahan, PI, luas, keliling } = require('./math');

console.log(penjumlahan(1, 2));
console.log(PI);
console.log(luas(2));
console.log(keliling(2));

// CATS
console.log(cats);