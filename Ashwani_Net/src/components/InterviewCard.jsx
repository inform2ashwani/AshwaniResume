function InterviewCard({ interview }) {
  return (
    <article className="content-card">
      <header>
        <p className="section-label">{interview.companyName}</p>
        <h3>{interview.role}</h3>
      </header>
      <p className="card-summary">{interview.location} · {interview.date}</p>
      <div className="small-list">
        {interview.stageDetails?.map((stage, index) => (
          <p key={index}>• {stage}</p>
        ))}
      </div>
      <p className="card-note">Outcome: {interview.outcome}</p>
      <p>{interview.learnings}</p>
    </article>
  )
}

export default InterviewCard
