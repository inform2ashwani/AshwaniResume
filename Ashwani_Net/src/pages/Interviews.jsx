import { useEffect, useState } from 'react'
import InterviewCard from '../components/InterviewCard'
import { getInterviews } from '../services/api'

function Interviews() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getInterviews()
      .then((data) => setItems(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="page interviews-page">
      <div className="page-header">
        <p className="eyebrow">Interview Stories</p>
        <h2>Companies, rounds, and outcomes</h2>
        <p className="section-copy">
          Browse past interview details, including stages, format, and lessons learned.
        </p>
      </div>
      {loading && <p>Loading interview reports...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="section-grid">
        {items.map((item) => (
          <InterviewCard key={item._id} interview={item} />
        ))}
      </div>
    </section>
  )
}

export default Interviews
