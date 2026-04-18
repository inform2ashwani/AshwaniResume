import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPostBySlug } from '../services/api'

function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPostBySlug(slug)
      .then((data) => setPost(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return (
      <section className="page blog-post-page">
        <p>Loading article...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="page blog-post-page">
        <p className="error-message">{error}</p>
        <Link to="/blog">Back to blog</Link>
      </section>
    )
  }

  if (!post) {
    return (
      <section className="page blog-post-page">
        <p>No article found.</p>
        <Link to="/blog">Back to blog</Link>
      </section>
    )
  }

  return (
    <section className="page blog-post-page">
      <div className="page-header">
        <p className="eyebrow">Blog article</p>
        <h2>{post.title}</h2>
        <p className="meta">{post.publishedDate} · {post.category}</p>
      </div>
      <article className="blog-content">
        <p className="post-summary">{post.summary}</p>
        <div className="post-body">{post.content}</div>
      </article>
      <Link className="button secondary" to="/blog">Back to blog</Link>
    </section>
  )
}

export default BlogPost
