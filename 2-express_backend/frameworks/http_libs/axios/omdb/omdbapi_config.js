const axios = require('axios');

module.exports = axios.create({
  baseURL: 'http://www.omdbapi.com',
  params: {
    'apikey': process.env.OMDB_API_KEY
  }
});