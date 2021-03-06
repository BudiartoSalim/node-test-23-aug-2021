const mysql = require('mysql2');
const pool = mysql.createPool({
  connectionLimit: 20,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB_NAME
});
module.exports = pool;