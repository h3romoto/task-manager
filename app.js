require('./db/connect')
const express = require('express')
const app = express();
const port = 3000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
require('dotenv').config()


app.get('/hello', (req, res) => {
  res.send('Task Manager App')
})

// middleware
app.use(express.static('./public'))
app.use(express.json())
// how does this work?
// app.use(notFound) 

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
