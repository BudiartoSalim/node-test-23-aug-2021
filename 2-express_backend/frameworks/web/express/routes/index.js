const router = require('express').Router();
const movieRouter = require('./movie_routes');

router.use('/movies', movieRouter);

module.exports = router;