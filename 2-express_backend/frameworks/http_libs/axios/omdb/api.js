const api = require('./config');

class AxiosOMDBApi {
  static getProvider() {
    return 'OMDB Api';
  }

  static async getMovies({ id, title, page, type, yearOfRelease }) {
    const queryParam = queryParamParser({ id, title, page, type, yearOfRelease });
    try {
      const key = process.env.OMDB_API_KEY;
      const res = await api({
        url: '/?apikey=' + key + queryParam,
        method: 'GET'
      });
      return {
        data: res.data,
        headers: res.headers,
        status: res.status,
        url: res.config.url,
        method: res.config.method,
        baseUrl: res.config.baseURL,
        key
      };
    } catch (err) {
      throw err;
    }
  }
}

function queryParamParser(obj) {
  if (!obj) { return "" };
  let queries = [
    { key: 'i', val: obj.id },
    { key: 's', val: obj.title },
    { key: 'page', val: obj.page },
    { key: 'type', val: obj.type },
    { key: 'y', val: obj.yearOfRelease }
  ]
    .filter((e) => {
      if (e.val) { return e }
    })
    .map((e) => { return `${e.key}=${e.val}` })
    .join("&");
  if (queries) { queries = "&" + queries };
  return queries;
}

module.exports = AxiosOMDBApi;