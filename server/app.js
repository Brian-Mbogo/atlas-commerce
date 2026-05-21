// Express app configuration lives here so it can be reused by tests and the server entry.
const cors = require('cors')
const express = require('express')

const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const authRoutes = require('./routes/authRoutes')
const healthRoutes = require('./routes/healthRoutes')
const productRoutes = require('./routes/productRoutes')

const app = express()

app.use(
  cors({
    // Allow the frontend app to call the API during development and deployment.
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/health', healthRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
  res.json({
    name: 'Atlas Commerce API',
    status: 'ok',
    version: 'v1',
  })
})

app.use(notFound)
app.use(errorHandler)

module.exports = app
