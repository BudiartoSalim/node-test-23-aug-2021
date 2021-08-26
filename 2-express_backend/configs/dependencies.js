const repository = require('../frameworks/db/mysql/repositories/index');
const { MovieApi } = require('../frameworks/http_libs/index');



module.exports = {
  repository,
  MovieApi
}