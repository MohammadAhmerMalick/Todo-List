const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  deleted: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Todo', TodoSchema)