// Lightweight health endpoint for uptime checks and quick deployment verification.
function getHealthStatus(req, res) {
  res.json({
    status: 'ok',
    service: 'Atlas Commerce API',
    environment: process.env.NODE_ENV || 'development',
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
  })
}

module.exports = {
  getHealthStatus,
}
