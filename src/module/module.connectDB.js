var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: '',
  database: 'btlweb'
});

connection.connect();

module.exports = connection;