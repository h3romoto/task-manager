 const Task = require('../models/tasks')

// CRUD callback functions
const getAllTasks = async (req, res) => {
  try {
    const tasks = await  Task.find({})
    return res.status(200).json({tasks})
  } catch (error) {
    return res.status(500).json({ msg: error})
  }
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


const getTask = async (req, res) => {
  try {
    const {id: taskID} = req.params
    const task = await Task.findOne({ _id: taskID})
    
    if (!task) {
      return res.status(404).json({ msg: `No message with id : ${taskID}` })
    }
    res.json({ task })
  } catch (error) {
    res.status(500).json({ msg: error})
  }
}


const deleteTask = async (req, res) => {
  const {id: taskID} = req.params
  try {
    const task = await Task.findOneAndDelete({ _id: taskID})

    if (!task) {
      return res.status(404).json({ msg: `No task with ID: ${taskID}` })
    }
  } catch (error) {
    res.status(500).json({ msg: error })
  }

  return res.send(`Deleted task ${taskID}`)
}


const updateTask = (req, res) => {
  return res.send('Update a task')
}


module.exports = {
  getAllTasks,
  createTask,
  getTask, 
  updateTask,
  deleteTask
}