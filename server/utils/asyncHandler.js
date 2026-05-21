// Wraps async route handlers so rejected promises are forwarded to Express errors.
function asyncHandler(handler) {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next)
  }
}

module.exports = asyncHandler
