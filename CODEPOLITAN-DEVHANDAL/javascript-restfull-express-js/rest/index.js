const express = require('express')
const path = require('path')
const app = express();


/**
 * ? kita harus mengaktifkan middleware dibawah agar express 
 * ? bisa membaca request body berupa form-endoded maupun json
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        username: 'Andy',
        text: 'ini adalah komentar 1',
    },
    {
        username: 'Andy2',
        text: 'ini adalah komentar 2',
    },
    {
        username: 'Andy3',
        text: 'ini adalah komentar 3',
    },
    {
        username: 'Andy4',
        text: 'ini adalah komentar 4',
    }
];

/**
 * ! BLUEPRINT
 * GET /comments - list all comments
* POST /comments - create a new comment
* GET /comments/:id - get one comment by id
* PATCH/PUT /comment/:id - update one comment by id
* DELETE /comments/:id - delete one comment by id
 */

app.get('/comments', (request, response) => {
    response.render('comments/index', {comments})
})

app.get('/comments/create', (request, response) => {
    response.render('comments/create')
})

app.post('/comments', (request, response) => {
    const {username, text} = request.body
    comments.push({username, text})
    response.redirect('/comments')
})



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