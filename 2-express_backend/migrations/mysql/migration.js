if (process.env.NODE_ENV !== 'production') { require('dotenv').config() };
// will be the entry point for executing all migration
const mysql = require('mysql2');
const createDb = require('./create_db');
const queries = require('./queries');
const pool = require('../../frameworks/db/mysql/config');

async function dbMigration() {
  try {

    await createDb();

    console.log('finish creating db');
    const firstMigrationQueries = queries.map((e) => {
      return new Promise((resolve, reject) => {
        pool.query(e, (err, rows, fields) => {
          if (err) { reject(err) };
          resolve(rows);
        })
      })
    });
    await Promise.all(firstMigrationQueries);
    pool.end();
    console.log('finish migrating tables');
  } catch (err) {
    console.log(err);
    console.log('failed to migrate');
  }
}

dbMigration();