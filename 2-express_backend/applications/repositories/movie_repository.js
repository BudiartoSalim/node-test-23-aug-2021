module.exports = class MovieRepository {
  static async addMovieToDatabase(repository, param) {
    repository.addMovieToDatabase(param);
  }

  static async getMovieById(repository, id) {
    repository.getMovieById(id);
  }
}