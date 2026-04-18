import mockData from '../data/mockData'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

async function tryFetch(path, fallback) {
  try {
    const response = await fetch(`${BASE_URL}${path}`)
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.warn(`Backend fetch failed, using fallback data for ${path}:`, error.message)
    return fallback
  }
}

export function getResume() {
  return tryFetch('/api/resume', mockData.resume)
}

export function getPosts() {
  return tryFetch('/api/posts', mockData.posts)
}

export function getPostBySlug(slug) {
  return tryFetch(`/api/posts/${slug}`, mockData.posts.find((post) => post.slug === slug) || null)
}

export function getInterviews() {
  return tryFetch('/api/interviews', mockData.interviews)
}

export function getQuestions() {
  return tryFetch('/api/questions', mockData.questions)
}
