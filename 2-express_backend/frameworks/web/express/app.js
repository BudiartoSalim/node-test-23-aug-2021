const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes here
app.use(router);

const errorHandler = require('./middlewares/error_handler');
app.use(errorHandler);

module.exports = app;