const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const app = express();
const routes = require('./src/route/main.routes')


app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(routes);


app.listen(7777,  () => {
  console.log('Server running at http://localhost:7777');
}
);