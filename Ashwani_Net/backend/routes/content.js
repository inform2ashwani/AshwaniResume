import express from 'express'
import {
  getResume,
  getPosts,
  getPostBySlug,
  getInterviews,
  getQuestions,
  createPost,
  updatePost,
  deletePost,
  createInterview,
  updateInterview,
  deleteInterview,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from '../controllers/contentController.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/resume', getResume)
router.get('/posts', getPosts)
router.get('/posts/:slug', getPostBySlug)
router.get('/interviews', getInterviews)
router.get('/questions', getQuestions)

router.post('/posts', auth, createPost)
router.put('/posts/:id', auth, updatePost)
router.delete('/posts/:id', auth, deletePost)

router.post('/interviews', auth, createInterview)
router.put('/interviews/:id', auth, updateInterview)
router.delete('/interviews/:id', auth, deleteInterview)

router.post('/questions', auth, createQuestion)
router.put('/questions/:id', auth, updateQuestion)
router.delete('/questions/:id', auth, deleteQuestion)

export default router
