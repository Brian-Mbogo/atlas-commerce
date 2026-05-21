// Server entry point loads configuration, connects the database, and starts Express.
require('dotenv').config()

const app = require('./app')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000

async function startServer() {
  await connectDB()

  app.listen(PORT, () => {
    console.log(`Atlas API listening on port ${PORT}`)
  })
}

startServer()
