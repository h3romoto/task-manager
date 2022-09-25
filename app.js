const express = require('express')
const app = express();

const port = 3000

const tasks = require('./routes/tasks')

app.get('/hello', (req, res) => {
  res.send('Task Manager App')
})

// middleware
app.use(express.json())

// root route for tasks
app.use('/api/v1/tasks', tasks)

app.listen(port, console.log(`Server listening on port ${port}`))

