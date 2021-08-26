class MovieController {
  static async getMovies({ endpoint, queryParams }, repository, api) {
    try {
      // do the API call
      const apiResult = await api.getMovies({
        title: queryParams.title,
        page: queryParams.page,
        type: queryParams.type,
        yearOfRelease: queryParams.yearOfRelease
      });

      // logs API call to DB
      await repository.logSearchToDatabase({
        endpoint: endpoint.url,
        provider: api.getProvider(),
        providerEndpoint: apiResult.baseUrl + apiResult.url,
        key: apiResult.key,
        method: apiResult.method,
        data: apiResult.data,
        parameters: queryParams
      })

      return {
        status: 200,
        data: apiResult
      }
    } catch (e) {
      throw e
    }
  }
  static async getMovieById({ endpoint, urlParams }, repository, api) {
    // do the API call
    const apiResult = await api.getMovies({ id: urlParams.movieId });

    // logs API call to DB
    await repository.logSearchToDatabase({
      endpoint: endpoint.url,
      provider: api.getProvider(),
      providerEndpoint: apiResult.baseUrl + apiResult.url,
      key: apiResult.key,
      method: apiResult.method,
      data: apiResult.data,
      parameters: urlParams
    })
    return {
      status: 200,
      data: apiResult
    }
  }
}

module.exports = MovieController;