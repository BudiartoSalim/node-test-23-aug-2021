const pool = require('../config');

class MysqlMovieRepository {
  static logSearchToDatabase({ endpoint, provider, providerEndpoint, key, method, data, parameters }) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO 
      movie_api_query_logs(endpoint, api_provider, provider_url_endpoint, method, api_key, response_body, parameters)
      VALUES(?, ?, ?, ?, ?, ?, ?);`;
      const queryVariables = [
        endpoint,
        provider,
        providerEndpoint,
        method,
        key,
        JSON.stringify(data),
        JSON.stringify(parameters)
      ];

      pool.query(query, queryVariables, (err, rows, field) => {
        if (err) return reject(err);
        resolve(rows);
      })
    })
  }

}

module.exports = MysqlMovieRepository;