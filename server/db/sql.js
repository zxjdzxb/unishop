var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'zxj621',
  database : 'aolai'
});
module.exports = connection;
