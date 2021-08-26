const router = require('express').Router();
const MovieAdapter = require('../adapters/movie-adapter');

router.get('/search', MovieAdapter.getMovieBySearch);
router.get('/detail/:movieId', MovieAdapter.getMovieById);

module.exports = router;