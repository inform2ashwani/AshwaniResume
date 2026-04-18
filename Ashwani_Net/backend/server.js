import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import contentRoutes from './routes/content.js'
import User from './models/user.js'
import bcrypt from 'bcrypt'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ashwani-net'

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api', contentRoutes)

app.get('/', (_req, res) => {
  res.json({ status: 'backend is running' })
})

async function createDefaultAdmin() {
  const existing = await User.findOne({ email: 'admin@example.com' })
  if (!existing) {
    const passwordHash = await bcrypt.hash('Admin123!', 10)
    await User.create({
      name: 'Admin',
      email: 'admin@example.com',
      passwordHash,
      role: 'admin',
    })
    console.log('Created default admin user admin@example.com / Admin123!')
  }
}

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB')
    await createDefaultAdmin()
    app.listen(PORT, () => {
      console.log(`API server listening on http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error)
  })
