import { Link } from 'react-router-dom'

function PostCard({ post }) {
  return (
    <article className="content-card">
      <header>
        <p className="section-label">{post.category}</p>
        <h3>{post.title}</h3>
      </header>
      <p>{post.summary}</p>
      <div className="card-meta">
        <span>{post.publishedDate}</span>
        <span>{post.tags?.join(' · ')}</span>
      </div>
      <Link className="button tertiary" to={`/blog/${post.slug}`}>
        Read full article
      </Link>
    </article>
  )
}

export default PostCard
