

class CustomAPIError extends Error {
  constructor(message, statusCode) {
    return next(createCustomError(`No message with id : ${taskID}`, 404))
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode)
} 

module.exports = {
  createCustomError, 
  CustomAPIError
}