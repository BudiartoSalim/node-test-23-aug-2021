const router = require('express').Router();
const MovieAdapter = require('../adapters/movie-adapter');

router.get('/', (MovieAdapter.getMovieAdapter));

module.exports = router;