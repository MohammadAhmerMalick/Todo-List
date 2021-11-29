const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
  },
  createdOn: {
    type: Date,
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Todo', TodoSchema)