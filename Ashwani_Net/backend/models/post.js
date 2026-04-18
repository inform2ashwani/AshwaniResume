import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    category: String,
    tags: [String],
    publishedDate: String,
    status: { type: String, default: 'draft' },
    author: String,
  },
  { timestamps: true }
)

export default mongoose.model('Post', postSchema)
