const express = require('express')
const app = express()
const connectDB = require('./database/connect')
const PORT = 8000

connectDB()

app.listen(PORT, () => { console.log(`server running on http://localhost:${PORT}`) })
app.use(express.json({ extended: false }))

app.get('/', (req, res) => { res.send('server running') })
app.use('/todo', require('./routes/todos'))
