const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('ahmer')
})

module.exports = router