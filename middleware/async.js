const asyncWrapper = (callback) => {
  return async (req, res, next) => {
    try {
      await callback(req, res, next)
    } catch (error) {
      // calls custom error handler
      next(error)
    }
  }
}

module.exports = asyncWrapper