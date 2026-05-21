// User model handles account data, roles, and secure password storage.
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    avatar: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  },
)

userSchema.pre('save', async function hashPassword(next) {
  // Passwords are hashed only when changed so regular profile updates stay efficient.
  if (!this.isModified('password')) {
    return next()
  }

  this.password = await bcrypt.hash(this.password, 10)
  next()
})

userSchema.methods.comparePassword = function comparePassword(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

userSchema.methods.toSafeObject = function toSafeObject() {
  // This helper removes private data before user records are returned to the client.
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    avatar: this.avatar,
    role: this.role,
  }
}

module.exports = mongoose.model('User', userSchema)
