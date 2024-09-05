// TODO: PROMISE, Objek yang dijanjikan asynchronus

// ?Callback Version
const requestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000){
            failure('Connection Timeout')
        } else {
            success(`${url} (${delay})ms`)
        }
    }, delay);
}

// Promise Version
const requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 3000){
                reject('Connection Timeout')
            } else {
                resolve(`${url} (${delay})ms`)
            }
        }, delay);
    })
}

// ?Percobaan Menggunakan Callback
if(false) {
    requestCallback('movie.com', function(response) {
        console.log('Berhasil: ' + response);
        requestCallback('movie.com', function(response) {
            console.log('Berhasil: ' + response);
            requestCallback('movie.com', function(response) {
                console.log('Berhasil: ' + response);
                requestCallback('movie.com', function(response) {
                    console.log('Berhasil: ' + response);
                }, function(response) {
                    console.log('Gagal: ' + response);
                })
            }, function(response) {
                console.log('Gagal: ' + response);
            })
        }, function(response) {
            console.log('Gagal: ' + response);
        })
    }, function(response) {
        console.log('Gagal: ' + response);
    })
}

// ?Percobaan Menggunakan Promise
if(false){
    requestPromise('google.com').then((response) => {
        console.log('success', response);
        requestPromise('google.com').then((response) => {
            console.log('success', response);
            requestPromise('google.com').then((response) => {
                console.log('success', response);
            }).catch((error) => {
                console.log('error', error);
            })
        }).catch((error) => {
            console.log('error', error);
        })
    }).catch((error) => {
        console.log('error', error);
    })
}
// !kode callback dan promise diatas, masih merupakan callback hell

// ?Cara Menggunakan Promise yang benar,
if(false) {
    requestPromise('google.com')
    // ?kita bisa menempatkan then setelah then ketika ingin ada kode lagi yang dijalankan
    .then((result) => {
        console.log(result + ' proses 1');
        return requestPromise('google.com')
    }).then(() => {
        console.log('proses 2');
        return requestPromise('google.com')
    }).then(() => {
        console.log('proses 2');
        return requestPromise('google.com')
    })
    // ?jadi then-then selanjutnya akan dijalankan ketika then pertama success,
    // ? ketika error maka akan berhenti, pahami sendiri lah ya gimana kode ini bekerja
    .catch((error) => {
        console.log(error);
    })
}


// TODO: Cara Membuat Promise
const contohPromise = () => {
    return new Promise((resolve, reject) => {
        resolve(() => {
            'berhasil'
        });
        reject(() => {
            'gagal'
        });
    })
}

// kita coba menggunakan studi kasus BackgroundChanger
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay);
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('blue', 1000))

// Sekarang ini menjadi lebih sederhana, inilah kmudahan menggunakan promise