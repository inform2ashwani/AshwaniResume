import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    companyName: String,
    topic: String,
    difficulty: String,
    dateAdded: String,
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.model('Question', questionSchema)
