// Health route is useful for Render health checks and quick smoke testing.
const express = require('express')

const { getHealthStatus } = require('../controllers/healthController')

const router = express.Router()

router.get('/', getHealthStatus)

module.exports = router
