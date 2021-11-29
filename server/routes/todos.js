const router = require('express').Router()
const todoController = require('../controllers/todoController')

// Add Todo Item
router.post('/', (req, res) => todoController.addToDoItem(req, res))
// Get Todo List
router.get('/', (req, res) => todoController.getToDoList(req, res))
// Delete Todo Item
router.delete('/', (req, res) => todoController.deleteToDoItem(req, res))
// update Todo Item
router.put('/', (req, res) => todoController.updateToDoItem(req, res))

module.exports = router