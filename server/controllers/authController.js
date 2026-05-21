// Auth controller manages the JWT-based account flow.
const User = require('../models/User')
const asyncHandler = require('../utils/asyncHandler')
const AppError = require('../utils/AppError')
const generateToken = require('../utils/generateToken')

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, avatar } = req.body

  if (!name || !email || !password) {
    throw new AppError('Name, email, and password are required.', 400)
  }

  const existingUser = await User.findOne({ email: email.toLowerCase() })

  if (existingUser) {
    throw new AppError('An account with this email already exists.', 409)
  }

  const user = await User.create({
    name,
    email: email.toLowerCase(),
    password,
    avatar,
  })

  res.status(201).json({
    // Return both the token and a safe user object for immediate client login.
    message: 'Account created successfully.',
    token: generateToken(user._id),
    user: user.toSafeObject(),
  })
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new AppError('Email and password are required.', 400)
  }

  const user = await User.findOne({ email: email.toLowerCase() }).select('+password')

  if (!user || !(await user.comparePassword(password))) {
    throw new AppError('Invalid email or password.', 401)
  }

  res.json({
    message: 'Login successful.',
    token: generateToken(user._id),
    user: user.toSafeObject(),
  })
})

const forgotPassword = asyncHandler(async (req, res) => {
  // This endpoint is ready for email-provider integration in the next backend slice.
  const { email } = req.body

  if (!email) {
    throw new AppError('Email is required.', 400)
  }

  res.json({
    message: `Password reset flow for ${email} is ready for email integration.`,
  })
})

const getCurrentUser = asyncHandler(async (req, res) => {
  res.json({
    user: req.user.toSafeObject(),
  })
})

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  getCurrentUser,
}
