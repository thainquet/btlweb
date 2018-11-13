const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
let public = path.join(__dirname, 'public');
let router = require("./src/route/main.routes")
const app = express();
//app.use(express.static(__dirname));	


app.set('PORT', process.env.PORT || 7777);

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(public, '/view/login.view.html'));
// });
// app.get('/register', (req, res) => {
//     res.sendFile(path.join(public, '/view/register.view.html'));
// });
// app.get('/home', (req, res) => {
//     res.sendFile(path.join(public, '/view/home.html'));
// });

// app.use('/', express.static(public));
// app.use(router);
app.use('/', router);

app.listen(app.get('PORT'))
