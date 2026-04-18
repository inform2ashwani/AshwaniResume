import { useEffect, useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import { getQuestions } from '../services/api'

function QandA() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getQuestions()
      .then((data) => setItems(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="page qanda-page">
      <div className="page-header">
        <p className="eyebrow">Interview Q&A</p>
        <h2>Questions and answers from backend panels</h2>
        <p className="section-copy">
          Review sample technical interview questions and the answers used for preparation.
        </p>
      </div>
      {loading && <p>Loading question set...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="section-grid">
        {items.map((item) => (
          <QuestionCard key={item._id} question={item} />
        ))}
      </div>
    </section>
  )
}

export default QandA
