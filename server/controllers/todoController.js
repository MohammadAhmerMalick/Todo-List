const Todo = require('../models/Todo')

const addToDoItem = async (req, res) => {

  const { title, detail } = req.body

  try {
    const newToDo = new Todo({ title, detail, createdOn: Date.now() })
    const todo = await newToDo.save()
    res.json(todo)

  } catch (error) {
    console.log({ todoController: error })
  }
}

const getToDoList = async (req, res) => {
  try {
    const todo = await Todo.find()
    res.json(todo)
  } catch (error) {
    console.log({ todoController: error })
  }
}

const deleteToDoItem = async (req, res) => {

  const { id } = req.body

  try {
    const deletedToDoCount = await Todo.deleteOne({ id })
    res.json(deletedToDoCount)
  } catch (error) {
    console.log({ todoController: error })
  }
}

const updateToDoItem = async (req, res) => {

  const { id, title, detail } = req.body

  try {
    const updatedToDo = await Todo.findByIdAndUpdate(id, { title, detail })
    res.json(updatedToDo)
  } catch (error) {
    console.log({ todoController: error })
  }
}

exports.getToDoList = getToDoList
exports.addToDoItem = addToDoItem
exports.deleteToDoItem = deleteToDoItem
exports.updateToDoItem = updateToDoItem