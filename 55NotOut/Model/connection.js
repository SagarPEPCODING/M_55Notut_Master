var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sagarboss12345',
  database: 'login',
});

connection.connect();
console.log('connect to db');

module.exports = connection;
