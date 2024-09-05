/**
setTimeout(() => {
    document.body.style.backgroundColor = 'red'
}, 3000);

setTimeout(() => {
    document.body.style.backgroundColor = 'yellow'
}, 6000);
 */

setTimeout(() => {
        document.body.style.backgroundColor = 'red'
    setTimeout(() => {
            document.body.style.backgroundColor = 'yellow' // sama seperti diatas
    }, 3000);
}, 3000);

// tapi ini akan membuat kode 'merepotkan', ini biasa disebut callback hell,
// -> dimana satu function didalamnya ada function didalamnya ada function dslnjtnya.

// Callback Function
searchMoviesApi('naruto', function(movies){
    saveToMyDb(movies, function() {
        // kalu behrasil simpan di db
    }), () => {
        // kalau gagl coba lagi
    }   
}, () => {
    // kalau server error voba lagi
})
// cara diatas juga masih 'merepotkan', karena akan ada function lain lagi di dalam function jika program memiliki banyak proses

// solusi untuk callback hell yaitu,
// Promise, Objek yang dijanjikan asynchronus



