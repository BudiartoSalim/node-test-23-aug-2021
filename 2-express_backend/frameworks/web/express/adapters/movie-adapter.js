// this is adapter to decouple express with controller
// so that the controller does not have to comply with express function format
const MovieController = require('../../../../controllers/movie_controller');
const dependencies = require('../../../../configs/dependencies');

module.exports = class MovieAdapter {
  static getMovieAdapter(req, res, next) {
    try {
      const queryParams = req.query;
      const urlParams = req.params;

      const results = MovieController.getMovies(
        { queryParams, urlParams },
        dependencies.repository,
        dependencies.MovieApi
      );
      res.status(results.status).json(results.data);
    } catch (e) {
      next(e);
    }
  }
}