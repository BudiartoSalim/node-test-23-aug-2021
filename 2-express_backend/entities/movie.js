class Movie {
  title;
  year;
  imdbId;
  type;
  poster;
  createdAt;
  updatedAt;

  constructor(title, year, imdbId, type, poster, createdAt, updatedAt) {
    this.title = title;
    this.year = year;
    this.imdbId = imdbId;
    this.type = type;
    this.poster = poster;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Movie;