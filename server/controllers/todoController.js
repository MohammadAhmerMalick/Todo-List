const Todo = require('../models/Todo')

const getToDoList = (req, res) => {
  res.send('ahmer')
}

const addToDoItem = async (req, res) => {
  const { title, detail } = req.body
  try {

    const newToDo = new Todo({ title, detail })
    const todo = await newToDo.save()

    res.json(todo)

  } catch (error) {
    console.log({ todoController: error })
  }
}

exports.getToDoList = getToDoList
exports.addToDoItem = addToDoItem