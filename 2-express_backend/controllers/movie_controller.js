class MovieController {
  static async getMovies({ queryParams, urlParams }, repository, api) {
    const apiResult = await api.getMovies(queryParams);
    return {
      status: 200,
      data: {
        apiResult
      }
    }
  }
}

module.exports = MovieController;