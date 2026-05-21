// Central JWT helper keeps token creation consistent across auth controllers.
const jwt = require('jsonwebtoken')

function generateToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET || 'atlas-dev-secret', {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  })
}

module.exports = generateToken
