const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const app = express();
const routes = require('./routes')


app.use(bodyParser.json());
app.use(routes);

app.listen(7777, () => {
    console.log('Server running on http://localhost:7777')
})