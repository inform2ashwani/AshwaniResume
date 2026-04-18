function QuestionCard({ question }) {
  return (
    <article className="content-card">
      <header>
        <p className="section-label">{question.companyName || question.topic}</p>
        <h3>{question.question}</h3>
      </header>
      <p><strong>Answer:</strong> {question.answer}</p>
      <div className="card-meta">
        <span>{question.difficulty}</span>
        <span>{question.dateAdded}</span>
      </div>
    </article>
  )
}

export default QuestionCard
