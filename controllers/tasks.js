 const Task = require('../models/tasks')

// CRUD callback functions
const getAllTasks = async (req, res) => {
  try {
    const tasks = await  Task.find({})
    res.status(200).json({tasks})
  } catch (error) {
    res.status(500).json({ msg: error})
  }

  res.send('All tasks available')
}

const createTask = async (req, res) => {
  // create new Mongo Document, Task
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error})
  }
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