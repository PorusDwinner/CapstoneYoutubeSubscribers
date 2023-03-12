const express = require('express');
const app = require('./app');
const mongoose = require('mongoose');
const port = process.env.port || 3000;

// Parser JSON bodies
mongoose.set('strictQuery' , false);

app.use(express.json());
app.use(express.urlencoded({extended : false}));

// Connection With Database
// Make sure mongoDB is installed locally to work with the code below.
const connectionString = 'mongodb://localhost/subscribers';

// Since the code below will return a promise,
// we are using .then() for resolve & .catch() for error

mongoose.connect(connectionString , {
    useNewUrlParser : true , useUnifiedTopology : true
})
.then(() => console.log('Connected...'))
.catch((err) => console.log('Failed To Connect : ', err));


// Start Server
app.listen(port , () => console.log(`Listening on ${port}`));