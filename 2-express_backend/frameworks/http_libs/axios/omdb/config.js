const axios = require('axios');
const url = require('url');

module.exports = axios.create({
  baseURL: `http://www.omdbapi.com`
});