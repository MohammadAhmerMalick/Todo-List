const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
  },
  starred: {
    type: Boolean,
    default: false
  },
  createdOn: {
    type: Date,
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  targetDate: {
    type: Date,
  }
})

module.exports = mongoose.model('Todo', TodoSchema)