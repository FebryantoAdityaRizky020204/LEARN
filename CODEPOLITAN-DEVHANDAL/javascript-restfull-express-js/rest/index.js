const express = require('express')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const methodOverride = require('method-override')
const app = express();


/**
 * ? kita harus mengaktifkan middleware dibawah agar express 
 * ? bisa membaca request body berupa form-endoded maupun json
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuidv4(),
        username: 'Andy',
        text: 'ini adalah komentar 1',
    },
    {
        id: uuidv4(),
        username: 'Andy2',
        text: 'ini adalah komentar 2',
    },
    {
        id: uuidv4(),
        username: 'Andy3',
        text: 'ini adalah komentar 3',
    },
    {
        id: uuidv4(),
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
    comments.push({username, text, id: uuidv4()})
    response.redirect('/comments')
})


app.patch('/comments/:id', (request, response) => {
    const { id } = request.params
    const newComments = request.body.text
    const foundComment = comments.find(comment => comment.id === id)
    foundComment.text = newComments
    response.redirect('/comments')
})
 
app.delete('/comments/:id', (request, response) => {
    const { id } = request.params
    comments = comments.filter(comment => comment.id !== id)
    response.redirect('/comments')
})


app.get('/order', (request, response) => {
    response.send('GET order response')
})

app.post('/order', (request, response) => {
    const {item} = request.body
    response.send(`POST order response, Item : ${item}`)
})

app.get('/comments/:id', (request, response) => {
    const { id } = request.params
    const comment = comments.find(comment => comment.id === id)
    response.render('comments/show', {comment})
})

app.get('/comments/:id/edit', (request, response) => {
    const { id } = request.params
    const comment = comments.find(comment => comment.id === id)
    response.render('comments/edit', {comment})
})

app.listen(8080, () => {
    console.log('Server is running on: http://localhost:8080');
})