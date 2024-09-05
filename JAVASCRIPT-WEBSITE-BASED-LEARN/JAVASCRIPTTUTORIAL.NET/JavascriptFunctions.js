// NGELOMPAT MATERI, MULAI DI JAVASCRIPT.INFO
{{
    console.log("start here");
}}

// TODO: FUNCTIONS
// ?Deklarasi Fungsi
function functionName(...parameters) {
    // the code, functionName: camelCase, bisa tanpa atau dengan parameter
    console.log(parameters);
    console.log(parameters[1]);
}

// memanggil fungsi
functionName("halo", "jajmbmaj");

// di javascript kita bisa manggil fungsi sebelum fungsi tersebut dideklarasikan, Hoisting Function
showMe(); // a hoisting example

function showMe() {
    console.log("an hoisting example");
}

// function with return, if the function has'nt have return a value its return undefined
function sumTwoNum(a, b) {
    return a + b;
}
console.log(sumTwoNum(2, 3));

function testTheValue(theM) {
    if (!theM) return; // langsung return jika tidak params kosong
    console.log(theM);
}
testTheValue("ada apa");

// TODO: JavaScript Functions are First-Class Citizens
// ?kita bisa menyimpan sebuah function ke sebuah variabel
function add(a, b) {
    return a + b;
}
let sumN = add; // ! tidak memerlukan '()'
console.log(sumN(1, 2));
// ?passing/memberikan fungsi ke fungsi lain sebagai argumen untuk parameter
function average(a, b, fn) {
    return fn(a, b) / 2;
}
let result = average(10, 20, sumN);
console.log(result);

// TODO: Returning functions from functions
// ?jika fungsi dapat menjadi nilai variabel, maka fungsi juga bisa menjadi nilai return
function compareBy(propertyName) {
    return function (a, b) {
        let x = a[propertyName],
            y = b[propertyName];
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    };
}

let products = [
    { name: 'iPhone', price: 900 },
    { name: 'Samsung Galaxy', price: 850 },
    { name: 'Sony Xperia', price: 700 }
];

products.sort()
console.log(products);

console.log('Products sorted by name:');
products.sort(compareBy('name'));
console.log(products);

let a = 10;
console.log(a + '1');

function cmToIn(length) {
    return length / 2.54;
}

function inToCm(length) {
    return length * 2.54;
}

// ?func di bawah menggunakan func lain sebagai parameter
function convert(fn, length) {
    return fn(length);
}

let inches = convert(inToCm, 10);
console.log(inches);



// TODO: JAVASCRIPT ANONYMOUS FUNCTIONS
// ?merupakan fungsi tanpa nama

// ?bisa dibuat untuk langsung dijalankan seperti dibawah ini
(function() {
    // ini akan error jika dibuat diluar ()
    console.log('halo');
});

// ?kita bisa menggunakannya dengan meyimpannya ke sebuah variabel
let showText = function() { console.log('halo semua'); }
showText()

// ?juga bisa digunakan sebagai argumen untuk sebuah fungsi bawaan javascript
setTimeout(function() {
    console.log('halo semua');
}, 1000);

// ?misalakn kita ingin memberikan argumen ke anon function yang langsung dijalankan,
// ? -> dilakukan dengan cara ini
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);


// TODO: ARROW FUNCTIONS
// ?adalah cara untuk mempersingkat sebuah fungsi yang sederhana
let anotherShowText = () => console.log('Anonymous function');
let anotherAdd = (a, b) => a + b;



// TODO: UNDERSTANDING JavaScript Pass-By-Value
/**
 * !JavaScript pass-by-value or pass-by-reference
 * ?setiap fungsi yang memerlukan argumen selalu mengambil nilai dari luar,
 * ?-> artinya kode mengcopy nilai yang diberikan ke variabel baru, setiap perubah yang dilakukan
 * ?-> pada variabel baru tidak akan mengubah nilai variabel yanng diluar, kecuali untuk beberapa tipe
 */

// ?Pass-by-value of primitives values
function square(x) {
    x = x * x;
    return x;
}
let y = 10;
let results = square(y);
console.log(results); // 100 
console.log(y); // 10 -- no change

// ?Pass-by-value of reference values
let persons = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge(obj) {
    obj.age += 1;
  }
  increaseAge(persons);
  console.log(persons);

//   !However, you cannot change the reference passed into the function. For example
let persons2 = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge2(obj) {
      obj.age += 1;
      // reference another object
      obj = { name: 'Jane', age: 22 };
  }
  
  increaseAge2(persons2);
  console.log(persons2);
//   !ini kan memiliki hasil berbeda jika [obj.age += 1;] ada dipaling bawah, karena akan merubah obj lokal

// TODO: JavaScript Recursive Function
// ?udah taulah ya, fungsi yang memanggil fungsi itu sendiri
function countDown(fromNumber) {
    console.log(fromNumber);
    let nextNumber = fromNumber - 1;
    if (nextNumber > 0) { countDown(nextNumber); }
}
countDown(3);
let newYearCountDown = countDown;
// !somewhere in the code
countDown = null;
// !the following function call will cause an error
// ?karena, seperti yang disebutkan dalam tutorial Jenis Fungsi, nama fungsi adalah referensi ke objek fungsi sebenarnya.
{
    // newYearCountDown(10); // ini di comment error soalnya bro
}
// !========================================================================
// ?untuk mengatasi error diatas, bisa dibuat seperti dibawah ini
// ?dengan menggunakan named function sehingga function terreferensi ke fungsi itu sendiri
let countDowns = function f(fromNumber) { 
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        f(nextNumber);
    }
}
let newYearCountDowns = countDowns;
countDowns = null;
newYearCountDowns(10);

// TODO: JAVASCRIPT DEFAUL PARAMETERS
function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say('Hello') // 'Hello'

// !Asli Nggak Paham juga ini
function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log(put('Toy Car'));
console.log(put('Teddy Bear'));
// not ['Toy Car','Teddy Bear']

function date(d = today()) {
    console.log(d);
}
function today() {
    return (new Date()).toLocaleDateString("en-US");
}
date();

// ?Banyak lah ya, baca disini https://www.javascripttutorial.net/javascript-default-parameters/





