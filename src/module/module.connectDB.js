var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'btlweb'
});

connection.connect((error) => {
    if (error) {
        console.error('something wrong');
        return;
    }

    console.log('db connected!');
});

module.exports = connection;

