import mongoose from 'mongoose'

const resumeSchema = new mongoose.Schema(
  {
    section: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    items: [String],
    order: Number,
  },
  { timestamps: true }
)

export default mongoose.model('Resume', resumeSchema)
