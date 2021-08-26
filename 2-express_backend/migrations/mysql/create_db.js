const mysql = require('mysql2');

async function createDb() {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: process.env.MYSQL_DB_HOST,
      user: process.env.MYSQL_DB_USER,
      password: process.env.MYSQL_DB_PASSWORD,
      port: 3306,

    });
    const dbName = process.env.MYSQL_DB_NAME;
    connection.connect();

    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`, (err, res, field) => {
      connection.end();
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log('success adding database');
        resolve(res);
      }
    });
  });
}

module.exports = createDb;