const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// models
const Place = require('./models/place');

// connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/bestpoints')
    .then((result) => {
        console.log('connected to mongodb');
    })
    .catch((err) => {
        console.log(err);
    });


// initiate template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
})

// app.get('/seed/place', async (req, res) => { 
//     const place = new Place({
//         title: 'The Eiffel Tower',
//         price: '$999999',
//         description: 'A wrought iron lattice tower on the Champ de Mars, named after engineer Gustave Eiffel.',
//         location: 'Paris, France'
//     });

//     await place.save();
//     res.send(place)
// })

app.listen(3000, () => {
    console.log('server running on http://127.0.0.1:3000');
});


