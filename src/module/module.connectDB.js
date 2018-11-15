var mysql = require('mysql');
var connection = mysql.createConnection({
<<<<<<< HEAD
  host: 'localhost',
  user: 'test',
  password: '',
  database: 'btlweb'
=======
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'btlweb'
>>>>>>> f96c7e28ff78af1a43501b5d353e4dec6d5f4aaa
});

connection.connect((error) => {
    if (error) {
        console.error('something wrong');
        return;
    }

    console.log('db connected!');
});

module.exports = connection;

