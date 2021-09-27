const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.connect(mongodb.URI, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log("database is connect"))
    .catch(err => console.log(err));