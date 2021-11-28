const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_KEY)
    await mongoose.connect(process.env.MONGODB_KEY,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    console.log({ database: 'database connected' })

  } catch (error) {
    console.log({ database: 'database not connected' })
    console.log({ database_error:error.message})
  }
}

module.exports = connectDB