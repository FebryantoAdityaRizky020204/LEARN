const express = require('express')

const app = express();

// app.use((request, response) => {
//     console.log('we got request');
//     response.send('<h1>Hello World</h1>');
// })

app.get('/', (request, response) => {
    response.send('This is homepage')
})

app.get('/cats', (request, response) => {
    response.send('This is cats page')
})

app.post('/cats', (request, response) => {
    response.send('This is cats from page post')
})

app.get('/about', (request, response) => {
    response.send('This is about page')
})


// routing dengan parameter
app.get('/blog/:judul', (request, response) => {
    const { judul } = request.params
    response.send(`ini halam blog ${judul}`)
})

app.get('/blog/:kategori/:author/:judul', (request, response) => {
    const { kategori, author, judul } = request.params
    response.send(`ini halaman blog [Kategori : ${kategori}] [Author: ${author}]  [Judul : ${judul}]`)
})

// mengambil nilai dari query string
app.get('/search', (request, response) => {
    const { title, author } = request.query // diambil menggunakan ini
    if (title && author) {
        response.send(`ini halaman search [Title : ${title}] [Author: ${author}]`)
    } else {
        response.send('please provide title and author')
    }
    // http://localhost:8080/search?title=halo&author=adit
})

/**
 * ? ->ini agar bisa melakukan restart program secara otomatis
 * ?    bisa menggunakan nodemon, sehingga setiap ada perubahan
 * ?    maka program akan dijalankan ulang secara otomatis
 * ! npm i global nodemon
 * ? kemudian jalankan program menggunakan perintah
 * !        nodemon index.js
 * ? maka program akan secara otomatis restart ketika terjadi perubahan
 */


app.get('*', (request, response) => {
    response.status(404).send('<h3>Resource not found</h3>')
})


app.listen(8080, () => {
    console.log('server is running on http://localhost:8080');
})


