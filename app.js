const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//****End of imports****

const connection = () => {
    mongoose.connect('mongodb://localhost/blogApp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected With Mongo DB');
};

connection();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

res.get('/', (req, res) => {
    res.send("Helloooo")
})

//********* listening to port ********
app.listen(3000);