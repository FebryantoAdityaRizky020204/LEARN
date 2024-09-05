/**
 * TODO: ASYNC
 * ? -> Fungsi async akan otomatis menjadi promise
 * ? -> kalau fungsinya punya data, maka resolve-nya akan mengirimkan data juga yang bisa diolah
 * ? -> kalau didalam function ada object throw error, maka akan menjalankan bagian reject
 * ! Mirip Promiselah
 */
if(false) {
    function hello(){} // ?Sebuah Function
    
    async function jugaHello() {} // otomatis menjadi promise
    
    const anotHello = async () => {
        // return 'Hello World'
        throw 'Maaf Ada Error'
    
        // ?return adalah resolve dan throw adalah reject
    }
    
    anotHello().then((res) => {
        console.log('Response: ', res);
    }).catch((err) => {
        console.log('Error: ', err);
    })
}



/**
 * TODO: AWAIT-
 * ? -> keyword await hanya bisa digunakan didalam fungsi dengan 'async'
 * ? -> await akan melakukan jeda proses selanjutnya dalam function, menunggu promise yang dijalankan resolved
 * ? ->
 */
// ?Contoh: BackgroundChanger
if(false){
    const delayedColorChange = (color, delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve()
            }, delay);
        })
    }
    
    async function changeColor() {
        await delayedColorChange('red', 1000)
        await delayedColorChange('blue', 1000)
        await delayedColorChange('purple', 1000)
        await delayedColorChange('yellow', 1000) 
        return 'All Done!'
        // await: kode tidak akan berjalan sebelum kode diatasnya selesai dijalankan
    }
    
    // Contoh Panggil Pertama
    changeColor().then((res) => {
        console.log('Success: ', res);
    })
    
    // Contoh Lain
    async function printRainbow() {
        await changeColor();
        console.log('All Done');
    }
    
    printRainbow()
}


/**
 * TODO: Mengelola Kondisi Error Dengan Async Await
 * ? -> 
 */
const requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) +500
        setTimeout(() => {
            if(delay > 2000) {
                reject('Connection Timeout zz')
            } else {
                resolve(`${url} (${delay}ms)`)
            }
        }, delay)
    })
}

async function requestHandler() {
    // ?jika result err, maka ini tidak akan dijalankan
    // ?maka kita perlu tambahkan handler untuk mengatasi hal ini, dengan memasukkan kode ke dalam try catch
    try {
        let result = await requestPromise('google.com')
        console.log(result); 
    } catch(error) {
        console.log('Error: ', error);
    }

}
if(true) {
}


