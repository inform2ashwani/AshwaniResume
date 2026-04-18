import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page home-page">
      <div className="hero-panel">
        <div>
          <p className="eyebrow">Digital Resume & Interview Blog</p>
          <h1>Build your career story with interview experience and technical Q&A.</h1>
          <p className="hero-copy">
            A full-stack portfolio app with a resume, interview reports, blog posts, and
            question-and-answer collections managed from a backend panel.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/resume">
              Explore Resume
            </Link>
            <Link className="button secondary" to="/blog">
              Read Blog
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <p className="card-title">What you will find</p>
          <ul>
            <li>Resume sections with experience and skills</li>
            <li>Interview company summaries and learnings</li>
            <li>Technical blog posts</li>
            <li>Interview Q&A and backend-managed content</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home
