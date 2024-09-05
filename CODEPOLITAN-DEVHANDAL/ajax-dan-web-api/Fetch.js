/**
 * TODO: FETCH
 * ? Cara baru melakukan request via JavaScript
 * ? Mendukung Promise
 * ? Tidak mendukung di internet explorer, karena nggak ada yang pake [mungkin]
 */

// ! CONTOH

// ? TANPA PROMISE
if(false) {

    fetch('https://swapi.dev/api/people/10')
        .then((res) => {
            if(!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            return res.json();
            // ? ini diperlukan untuk mengambil data dari response yang diberikan
            // ? kemudian data tersebut direturn dan akan diproses di then yang kedua,
            // ? udah dicoba, response diberikan berbeda, dan data people yang kita inginkan
            // ? ada di proses yang kedua
        })
        .then((data) => {
            console.log('json ', data);
    
            // contoh jika ingin melakukan request lagi
            return fetch('https://swapi.dev/api/people/11')
                .then((res) => {
                    if(!res.ok) {
                        throw Error('Could not fetch the data for that resource')
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log('json ', data);
                })
                .catch((err) => {
                    console.log('error ', err);
                })
        })
        .catch((err) => {
            console.log('error ', err);
        })
}

// ? MENGGUNAKAN PROMISE
if(false){
    const loadPeople = async () => {
        try {
            let res = await fetch('https://swapi.dev/api/people/11')
            let data = await res.json()
            console.log(data);
    
            let res2 = await fetch('https://swapi.dev/api/peodple/12')
            let data2 = await res2.json()
            console.log(data2);
        } catch(err){
            console.log('error ', err);
        }
    
    }

    loadPeople()
}