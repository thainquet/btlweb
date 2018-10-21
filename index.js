const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
let public = path.join(__dirname, 'public');
const app = express();
//app.use(express.static(__dirname));	
app.use(bodyParser.json());
app.get('/login', (req, res) => {
    res.sendFile(path.join(public, '/view/login.view.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(public, '/view/register.view.html'));
});
app.use('/', express.static(public));
app.listen(7777, () => {
    console.log('Server running on http://localhost:7777')
})