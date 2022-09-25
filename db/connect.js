const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://utu:batana@node-express-proj-db.z9klkdh.mongodb.net/TASK_MANAGER?retryWrites=true&w=majority'

// connect to TASK_MANAGER database
const connectDB = (url) => {
  return mongoose
    .connect(connectionString);
}

module.exports = connectDB