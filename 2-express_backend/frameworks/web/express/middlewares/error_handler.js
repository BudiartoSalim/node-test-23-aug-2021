const errorList = require('../../../../entities/error_defs');
function errorHandler(err, req, res, next) {
  if (errorList[err]) {
    const error = errorList[err];
    res.status(error.status).json({ errorMessage: error.message })
  } else {
    res.status(500).json({ errorMessage: 'Internal Server Error!', unhandledError: err })
  }
}

module.exports = errorHandler;