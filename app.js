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


// root route for tasks
app.use('/api/v1/tasks', tasks)

// place custom error handlers at the bottom here
// below all app.use()'s and other middleware
app.use(notFound) 
app.use(errorHandlerMiddleware)

const port = 3000

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