 const Task = require('../models/tasks')

// callback functions
const getAllTasks = (req, res) => {
  res.send('All tasks available')
}

const createTask = async (req, res) => {
  // create new Mongo Document, Task
  const task = await Task.create(req.body)
  res.status(200).json({ task })
}

const getTask = (req, res) => {
  res.json({id:req.params.id})
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