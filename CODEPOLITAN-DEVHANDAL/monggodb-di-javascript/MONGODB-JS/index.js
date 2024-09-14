const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/learn-mongodb-js')
    .then(() => console.log('mongoose connected'))
    .catch((err) => console.log(err))