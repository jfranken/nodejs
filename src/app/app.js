var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.get('/', function (req, res) {
    res.send('HELLO WORLD 3!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');

    mongoose.connect('mongodb://10.0.2.2:27017/test_db').then(() => {
            console.log("Successfully connected to Mongo DB");
        },
        err => {
            console.log("An error occurred during database connection", err);
        });
});