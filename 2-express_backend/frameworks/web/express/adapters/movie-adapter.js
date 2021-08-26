// this is adapter to decouple express with controller
// so that the controller does not have to comply with express function format
const MovieController = require('../../../../controllers/movie_controller');
const dependencies = require('../../../../configs/dependencies');

module.exports = class MovieAdapter {
  static async getMovieBySearch(req, res, next) {
    try {
      const queryParams = req.query;
      const endpoint = {
        url: req.url,
        method: req.method
      }

      const results = await MovieController.getMovies(
        { endpoint, queryParams },
        dependencies.repository.movie,
        dependencies.MovieApi
      );
      res.status(results.status).json(results.data);
    } catch (e) {
      next(e);
    }
  }

  static async getMovieById(req, res, next) {
    try {
      const urlParams = req.params;
      const endpoint = {
        url: req.url,
        method: req.method
      }

      const results = await MovieController.getMovieById(
        { endpoint, urlParams },
        dependencies.repository.movie,
        dependencies.MovieApi
      );
      res.status(results.status).json(results.data);
    } catch (e) {
      next(e);
    }
  }
}