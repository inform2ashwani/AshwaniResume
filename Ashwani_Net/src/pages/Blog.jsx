import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../services/api'
import PostCard from '../components/PostCard'

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="page blog-page">
      <div className="page-header">
        <p className="eyebrow">Interview Blog</p>
        <h2>Latest technical stories and interview reflections</h2>
        <p className="section-copy">
          Discover articles about interview preparation, lessons learned, and
          real-world backend system design.
        </p>
      </div>
      {loading && <p>Loading posts...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="section-grid">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
      <div className="blog-footer">
        <Link to="/">Back to home</Link>
      </div>
    </section>
  )
}

export default Blog
