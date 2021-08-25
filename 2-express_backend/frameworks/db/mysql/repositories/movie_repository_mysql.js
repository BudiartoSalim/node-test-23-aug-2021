const pool = require('../config');

class MysqlMovieRepository {
  static getMovieById(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM movies WHERE id = ? ;`;
      const queryVariables = [id];

      pool.query(query, queryVariables, (err, rows, field) => {
        if (err) return reject(err);
        resolve(rows);
      })
    })
  }

  static addMovieToDatabase({ title, year, imdbID, type, poster }) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO 
      'movies' ('title', 'year', 'imdb_id', 'type', 'poster', created_at, updated_at)
      VALUES (?, ?, ?, ?,  ?, NOW(), NOW());`
      const queryVariables = [title, year, imdbID, type, poster];

      pool.query(query, queryVariables, (err, rows, field) => {
        if (err) return reject(err);
        resolve(rows);
      })
    })
  }
}

module.exports = MovieRepository;