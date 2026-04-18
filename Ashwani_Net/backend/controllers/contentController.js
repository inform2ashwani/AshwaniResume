import Resume from '../models/resume.js'
import Post from '../models/post.js'
import Interview from '../models/interview.js'
import Question from '../models/question.js'

export async function getResume(_req, res) {
  const data = await Resume.find({}).sort({ order: 1 })
  res.json(data)
}

export async function getPosts(req, res) {
  const query = { status: 'published' }
  const posts = await Post.find(query).sort({ publishedDate: -1 })
  res.json(posts)
}

export async function getPostBySlug(req, res) {
  const { slug } = req.params
  const post = await Post.findOne({ slug, status: 'published' })
  if (!post) {
    return res.status(404).json({ message: 'Post not found' })
  }
  res.json(post)
}

export async function getInterviews(_req, res) {
  const interviews = await Interview.find({}).sort({ date: -1 })
  res.json(interviews)
}

export async function getQuestions(_req, res) {
  const questions = await Question.find({ published: true }).sort({ dateAdded: -1 })
  res.json(questions)
}

export async function createPost(req, res) {
  const payload = req.body
  const post = await Post.create(payload)
  res.status(201).json(post)
}

export async function updatePost(req, res) {
  const { id } = req.params
  const post = await Post.findByIdAndUpdate(id, req.body, { new: true })
  if (!post) {
    return res.status(404).json({ message: 'Post not found' })
  }
  res.json(post)
}

export async function deletePost(req, res) {
  const { id } = req.params
  const post = await Post.findByIdAndDelete(id)
  if (!post) {
    return res.status(404).json({ message: 'Post not found' })
  }
  res.json({ success: true })
}

export async function createInterview(req, res) {
  const interview = await Interview.create(req.body)
  res.status(201).json(interview)
}

export async function updateInterview(req, res) {
  const { id } = req.params
  const interview = await Interview.findByIdAndUpdate(id, req.body, { new: true })
  if (!interview) {
    return res.status(404).json({ message: 'Interview not found' })
  }
  res.json(interview)
}

export async function deleteInterview(req, res) {
  const { id } = req.params
  const interview = await Interview.findByIdAndDelete(id)
  if (!interview) {
    return res.status(404).json({ message: 'Interview not found' })
  }
  res.json({ success: true })
}

export async function createQuestion(req, res) {
  const question = await Question.create(req.body)
  res.status(201).json(question)
}

export async function updateQuestion(req, res) {
  const { id } = req.params
  const question = await Question.findByIdAndUpdate(id, req.body, { new: true })
  if (!question) {
    return res.status(404).json({ message: 'Question not found' })
  }
  res.json(question)
}

export async function deleteQuestion(req, res) {
  const { id } = req.params
  const question = await Question.findByIdAndDelete(id)
  if (!question) {
    return res.status(404).json({ message: 'Question not found' })
  }
  res.json({ success: true })
}
