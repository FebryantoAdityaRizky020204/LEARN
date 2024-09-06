const express = require('express')

const app = express();


/**
 * ? kita harus mengaktifkan middleware dibawah agar express 
 * ? bisa membaca request body berupa form-endoded maupun json
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/order', (request, response) => {
    response.send('GET order response')
})

app.post('/order', (request, response) => {
    const {item} = request.body
    response.send(`POST order response, Item : ${item}`)
})

app.listen(8080, () => {
    console.log('Server is running on: http://localhost:8080');
})