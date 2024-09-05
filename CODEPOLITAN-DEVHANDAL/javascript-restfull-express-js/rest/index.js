const express = require('express')

const app = express();

app.get('/order', (request, response) => {
    response.send('GET order response')
})

app.post('/order', (request, response) => {
    response.send('POST order response')
})

app.listen(8080, () => {
    console.log('Server is running on: http://localhost:8080');
})