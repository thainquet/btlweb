const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const app = express();


app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(7777, () => {
    console.log('Server running on http://localhost:7777')
})