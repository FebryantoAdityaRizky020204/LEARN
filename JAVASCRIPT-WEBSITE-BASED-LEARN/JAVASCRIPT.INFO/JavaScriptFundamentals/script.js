// TODO : LET's START
console.log("Hello World"); // beberapa syntax tidak memerlukan titik koma
function fisrtTest() {
  alert("Hello World"); // Komentar: ini harus diberikan titik koma, karena ada [] setelahnya
  [1, 2].forEach(alert);
} // ditempatkan di function agar tidak dipanggil terus menerus

// single line komentar
/**
    Komentar Bersarang
**/

// TODO: USE STRICT
("use strict");
/**
        kode dibawah akan menggunakan cara modern, tapi harus ditempatkan di paling atas, disini tidak akan diterapkan
        tidak ada cara untuk menghentikan use strict ketika sudah digunakan pada sutau file
        sebenarnya tidak perlu digunkan karena sudah otomatis aktif ketika menggunakan classs dan modules
        --
        Jadi, untuk sekarang "use strict"; adalah hal yang perlu ada di awal dari skrip kamu. 
        Nanti, ketika seluruh kodemu telah menggunakan kelas dan modul, kamu bisa menghilangkannya
**/

// TODO: VARIABEL
let pesan;
pesan = "pesan saya adalah";

let coba = 1,
  kita = "halo",
  buatSepertiIni = "bisadong";

kita = "ubah jadi hola"; // nilai kita akan berubah
// CASE Berpengaruh NamA dan nama adalah variabel yang berbeda

const tidakBisaDiubah = "Karena Menggunakan CONST";
// umumnya constant dibuat menggunakan huruf besar

// TODO: TIPE DATA
// ? tidak ada penamaan khusus var,let,const bisa menyimpan semua tipe data
let satu = 1;
let dua = "string";
let tiga = true;
let empat = 123123123124n; // bigInt
let lima = undefined;
const phi = 3.14;
typeof satu; // typeof digunakan untuk mengetahui tipe data dari suatu variabel
/**
 * ? Ada 7 tipe data dasar dalam JavaScript.
 * - number untuk nomor dengan bentuk apapun: integer ataupun nilai yang memiliki nilai desimal, batas dari integer adalah ±253.
 * - bigint untuk nomor integer yang sangat panjang.
 * - string untuk string. Sebuah string mungkin memiliki 0 atau lebih karakter, tidak ada tipe data untuk string yang memiliki panjang 1 karakter.
 * - boolean untuk true/false.
 * - null untuk nilai yang tidak diketahui – sebuah tipe data mandiri yang memiliki satu nilai yaitu null.
 * - undefined untuk nilai yang tidak ada atau tidak diberikan nilai – sebuah tipe data mandiri yang memiliki satu nilai yaitu null.
 * - object untuk struktur data yang lebih rumit.
 * - symbol untuk identifier atau pengenal yang unik.
 *
 * ? Operator typeof memungkinkan kita melihat tipe mana yang disimpan dalam variable.
 * - Dua form: typeof x atau typeof(x).
 * - Mengembalikan string dengan nama tipe, seperti "string".
 * - Untuk null mengembalikan "object" – ada error dalam bahasa, yang sebenarnya bukan objek.
 */

// TODO: Interaction: alert, prompt, confirm
function apc() {
  // agar tidak dijalankan di browser
  alert("untuk memberikan alert"); // you know lah
  prompt("Mengambil nilai dari user", 100); // ex: Berapa umur kamu (question, defaultValue)
  confirm("Melakukan Konfirmasi ke User"); // true or false
}

// TODO: KONVERSI TIPE DATA
// ? Konversi String
let value = true; // ! boolean
value = String(value); // ! menjadi tipe data string

// ? Konversi Numerik, terjadi otomatis ketika terdapat expresi aritmatika, misalnya
console.log("6" / "2"); // ! hasilnya akan menjadi 3, otomatis berubah tipe data, keculai + maka di concat

let strNum = "123";
strNum = Number(strNum) // ! menjadi tipe data numerik

//  !tidak bisa melakukan konversi ke sebuah kalimat, teks atau karakter
let age = Number("an arbitrary string instead of a number");
alert(age); // !NaN, konversi gagal

// ? Konversi Boolean
// ! melakukan konversi dari angka 1 atau 0 yang akan direpresentasikan sebagai true atau false
let theT = 1; // numerik
theT = Boolean(theT) // menjadi boolean TRUE
let theF = 0;
theF = Boolean(theF) // menjadi boolean FALSE

// TODO: OPERATOR DASAR
// ? istilah unary, binary dan operand
// ! BANYAK lihat disini langsung : https://id.javascript.info/operators

// TODO: PERBANDINGAN
// ! > < >= <= != == === !== <> 
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 != 1);

// TODO: KONDISI BERACBANG IF ELSE
let kondisi = true;
if(kondisi) {
  // !dijalankan jika kondisi benar
} else if(kondisi == "halo") {
  // unutk memberikan kondisi lain
} else {
  // !dijalankan ketika kondisi salah
}
  // ? TERNARY OPERATOR [let result = condition ? value1 : value2;]
  let umur = 21
  let bolehDiakses  = (umur > 18) ? true : false;

  // ? MULTIPLE TERNARY ? : ?
  umur = prompt('age?', 18);
  let message = (umur < 3) ? 'Hi, baby!' :
    (umur < 18) ? 'Hello!' :
    (umur < 100) ? 'Greetings!' :
    'What an unusual age!';
  console.log(umur);


// TODO: OPERATOR LOGIKA
// ? OR ||, AND &&, dan NOT !

// TODO: OPERATOR PENGGABUNGGAN NULLISH ??
/**
 * untuk mengecek apakah suatu variabel bernilai null atau undefined
 */

let nama;
console.log(nama ?? "Tidak Ada"); // ! [Tidak Ada] karena variabel nama tidak memiliki nilai
nama = "John"
console.log(nama ?? "Tidak Ada"); // ![John] karena sekarang variabel nama sudah memiliki nilai

// TODO: PERULANGAN WHILE DAN FOR
let theKondisi = true;

while(kondisi) {
  // dijalankan jika kondisi bernilai true
}

do {
  // dijalankan jika kondisi true, dan ini kan melakukan operasi minimal 1 kali
} while(kondisi)

for(let i = 0; i < 1; i++) {
  // you know lah
}

// ! BREAK DAN CONTINUE BISA MENGGUNAKAN LABEL
outer: for (let i = 1; i < 4; i++) {
  for (let j = 1; j < 4; j++) {
    if (i + j == 3) continue outer;
    console.log(i, j);
  }
}

outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i + j == 4) { break outer; }
    console.log(i, j);
  }
}
//! dan BREAK dan Continue, baca sendiri lah ya

// TODO: 





