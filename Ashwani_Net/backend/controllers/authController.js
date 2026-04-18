import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret'

export async function login(req, res) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' })
  }

  const user = await User.findOne({ email })
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' })
  }

  const isValid = await bcrypt.compare(password, user.passwordHash)
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid email or password.' })
  }

  const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: '7d',
  })

  res.json({ token, user: { email: user.email, name: user.name, role: user.role } })
}
