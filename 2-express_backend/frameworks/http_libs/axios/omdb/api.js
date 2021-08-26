const api = require('./config');

module.exports = class AxiosOMDBApi {
  static async getMovies({ id, title, page, type, yearOfRelease }) {
    const queryParam = queryParamParser({ id, title, page, type, yearOfRelease });
    try {
      return api({
        url: '/?apikey=' + process.env.OMDB_API_KEY + queryParam,
        method: 'GET'
      })
    } catch (err) {
      throw err;
    }
  }
}


function queryParamParser(obj) {
  if (!obj) { return "" };
  let queries = [
    { key: 'id', val: obj.id },
    { key: 's', val: obj.title },
    { key: 'page', val: obj.page },
    { key: 'type', val: obj.type },
    { key: 'y', val: obj.yearOfRelease }
  ]
    .filter((e) => {
      if (e.val) { return e }
    })
  queries = queries.map((e) => { return `${e.key}=${e.val}` }).join("&");
  if (queries) { queries = "&" + queries };
  return queries;
}