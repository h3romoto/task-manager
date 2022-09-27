const { createCustomError, CustomAPIError } = require('../errors/custom-errors')

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: `Something's wrong here. Please try again later` })
}

module.exports = errorHandlerMiddleware