const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Enter name'],
    trim: true,
    maxlength: [20, 'Should not exceed 20 chars']
  },
completed:{
  type: Boolean,
  default: false,
},
})

module.exports = mongoose.model('Task', TaskSchema)