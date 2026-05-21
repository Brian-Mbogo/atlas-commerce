// Handles MongoDB connection setup for local development and deployment environments.
const mongoose = require('mongoose')

async function connectDB() {
  if (!process.env.MONGODB_URI) {
    console.warn('MONGODB_URI is not set. Atlas API will start without a database connection.')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
