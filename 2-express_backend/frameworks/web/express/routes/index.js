const router = require('express').Router();
const MovieAdapter = require('../adapters/movie-adapter');

router.use('/detail/:movieId', MovieAdapter.getMovieBySearch);
router.get('/search', MovieAdapter.getMovieBySearch);

module.exports = router;