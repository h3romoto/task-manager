require('./db/connect')
const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()


// middleware
app.use(express.static('./public'))
app.use(express.json())
app.use(errorHandlerMiddleware)
// how does this work?
app.use(notFound) 

const port = 3000

// root route for tasks
app.use('/api/v1/tasks', tasks)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
      .then(() => console.log('Connected to the Database...'))
    app.listen(port, console.log(`Server listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()