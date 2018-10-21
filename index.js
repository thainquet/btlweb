const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
let public = path.join(__dirname, 'public');

app.set('PORT', process.env.PORT || 7777);
const app = express();
//app.use(express.static(__dirname));	
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(public, '/view/login.view.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(public, '/view/register.view.html'));
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(public, '/view/home.html'));
});
app.use('/', express.static(public));
app.listen(app.get(PORT))