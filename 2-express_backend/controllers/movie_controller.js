class MovieController {
  static getMovies({ queryParams, urlParams }, repository, api) {
    return {
      status: 200,
      data: {
        message: "yes",
        payload: "placeholder payload",
        urlParams,
        queryParams
      }
    }
  }
}

module.exports = MovieController;