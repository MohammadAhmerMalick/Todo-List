const router = require('express').Router()
const todoController = require('../controllers/todoController')

router.post('/', (req, res) => todoController.addToDoItem(req, res))

router.get('/', (req, res) => todoController.getToDoList(req, res))

module.exports = router