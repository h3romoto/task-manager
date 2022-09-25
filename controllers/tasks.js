 const Task = require('../models/tasks')

// CRUD callback functions
const getAllTasks = async (req, res) => {
  try {
    const tasks = await  Task.find({})
    return res.status(200).json({tasks})
  } catch (error) {
    return es.status(500).json({ msg: error})
  }

  res.send('All tasks available')
}


const createTask = async (req, res) => {
  // create new Mongo Document, Task
  try {
    const task = await Task.create(req.body)
    return res.status(201).json({ task })
  } catch (error) {
    return res.status(500).json({ msg: error})
  }
}


const getTask = (req, res) => {
  return res.json({id:req.params.id})
}


const updateTask = (req, res) => {
  return res.send('Update a task')
}


const deleteTask = (req, res) => {
  return res.send('Delete a task')
}


module.exports = {
  getAllTasks,
  createTask,
  getTask, 
  updateTask,
  deleteTask
}