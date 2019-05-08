const mysql = require('mysql');
const bluebird = require('bluebird');
var dbConnection = mysql.createConnection({
    user: process.env.MYSQL_USER || 'root',
    database: 'poems'
});



module.exports = bluebird.promisifyAll(dbConnection);