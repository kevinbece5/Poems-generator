const mysql = require('mysql');
const bluebird = require('bluebird');
var dbConnection = mysql.createConnection({
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || ''
});

const db = bluebird.promisifyAll(dbConnection);

const setup = async () => {
    try {
        await db.connectAsync();
        await db.queryAsync(`CREATE DATABASE IF NOT EXISTS poems`)
        await db.queryAsync('CREATE TABLE IF NOT EXISTS poems.poems(id INT AUTO_INCREMENT PRIMARY KEY, poem LONGTEXT, timeStamp VARCHAR(255))')
    } catch (err) {
        throw { setupErr: err };
    }

}

module.exports = {
    db,
    setup
}