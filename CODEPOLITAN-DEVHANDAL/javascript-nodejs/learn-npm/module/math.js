const penjumlahan = (a, b) => a + b;

const PI = 3.14

const luas = (jari) => PI * jari * jari;

const keliling = (jari) => 2 * PI * jari


module.exports.penjumlahan = penjumlahan
module.exports.PI = PI
module.exports.luas = luas
module.exports.keliling = keliling

// atau bisa langsung begini
const math = { penjumlahan, luas, keliling, PI }

module.exports = math