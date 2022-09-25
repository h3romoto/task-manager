
// callback functions
const getAllTasks = (req, res) => {
  res.send('All tasks available')
}

const createTask = (req, res) => {
  res.send('Create task')
}

const getTask = (req, res) => {
  res.send('Get a single task')
}

const updateTask = (req, res) => {
  res.send('Update a task')
}

const deleteTask = (req, res) => {
  res.send('Delete a task')
}

module.exports = {
  getAllTasks,
  createTask,
  getTask, 
  updateTask,
  deleteTask
}