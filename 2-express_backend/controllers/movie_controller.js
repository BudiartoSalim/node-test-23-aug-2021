class MovieController {
  static async getMovies({ queryParams }, repository, api) {
    const apiResult = await api.getMovies({
      title: queryParams.title,
      page: queryParams.page,
      type: queryParams.type,
      yearOfRelease: queryParams.yearOfRelease
    });
    return {
      status: 200,
      data: apiResult
    }
  }
  static async getMovieById({ urlParams }, repository, api) {
    const apiResult = await api.getMovies({ id: urlParams.movieId });
    return {
      status: 200,
      data: apiResult
    }
  }
}

module.exports = MovieController;