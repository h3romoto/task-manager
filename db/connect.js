const mongoose = require('mongoose')

// connect to TASK_MANAGER database
const connectDB = (url) => {
  return mongoose
    .connect(url);
}

module.exports = connectDB