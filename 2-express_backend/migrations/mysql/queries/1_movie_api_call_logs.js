// will be filled with the api_call_logs table migration sql query
const query = `CREATE TABLE IF NOT EXISTS movie_api_query_logs(
  id INT AUTO_INCREMENT PRIMARY KEY,
  endpoint VARCHAR(255),
  api_provider VARCHAR(255),
  provider_url_endpoint VARCHAR(255),
  method VARCHAR(10),
  api_key VARCHAR(255),
  response_body TEXT,
  parameters TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`;
module.exports = query;