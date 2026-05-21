// Auth middleware protects private routes and checks role-based access when needed.
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const asyncHandler = require('../utils/asyncHandler')
const AppError = require('../utils/AppError')

const protect = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new AppError('Authorization token is required.', 401)
  }

  const token = authHeader.split(' ')[1]
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  const user = await User.findById(decoded.userId)

  if (!user) {
    throw new AppError('User not found for this token.', 401)
  }

  req.user = user
  next()
})

const authorize = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return next(new AppError('You are not allowed to access this resource.', 403))
  }

  next()
}

module.exports = {
  protect,
  authorize,
}
