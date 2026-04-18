import mongoose from 'mongoose'

const interviewSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    role: { type: String, required: true },
    date: String,
    location: String,
    stageDetails: [String],
    outcome: String,
    learnings: String,
    notes: String,
  },
  { timestamps: true }
)

export default mongoose.model('Interview', interviewSchema)
