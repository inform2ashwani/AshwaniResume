function ResumeSection({ section }) {
  const renderContact = () => (
    <ul className="contact-list">
      {section.items.map((item) => (
        <li key={item.label}>
          <span className="contact-label">{item.label}</span>
          {item.href ? (
            <a href={item.href}>{item.value}</a>
          ) : (
            <span>{item.value}</span>
          )}
        </li>
      ))}
    </ul>
  )

  const renderSkills = () => (
    <div className="skill-grid">
      {section.items.map((item) => (
        <div key={item.category} className="skill-group">
          <p className="skill-group-title">{item.category}</p>
          <div className="skill-chips">
            {item.values.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  const renderExperience = () => (
    <div className="experience-list">
      {section.items.map((item) => (
        <article key={item.company} className="experience-card">
          <div className="experience-heading">
            <div>
              <p className="section-label">{item.company}</p>
              <h3>{item.role}</h3>
            </div>
            <div className="experience-meta">
              <span>{item.date}</span>
              <span>{item.location}</span>
            </div>
          </div>
          <p className="experience-summary">{item.summary}</p>
          <ul>
            {item.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )

  const renderEducation = () => (
    <div className="education-list">
      {section.items.map((item) => (
        <div key={item.institution} className="education-card">
          <p className="section-label">{item.institution}</p>
          <h3>{item.degree}</h3>
          <p className="education-meta">{item.date}</p>
          {item.details && <p>{item.details}</p>}
        </div>
      ))}
    </div>
  )

  const renderCertifications = () => (
    <ul className="simple-list">
      {section.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )

  const renderSummary = () => (
    <div>
      <p className="summary-copy">{section.content}</p>
      {section.items?.length > 0 && (
        <ul className="summary-list">
          {section.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )

  return (
    <article className={`resume-section-card resume-section-${section.type}`}>
      <header>
        <h3>{section.title}</h3>
      </header>
      {section.type === 'contact' && renderContact()}
      {section.type === 'skills' && renderSkills()}
      {section.type === 'experience' && renderExperience()}
      {section.type === 'education' && renderEducation()}
      {section.type === 'certifications' && renderCertifications()}
      {section.type === 'summary' && renderSummary()}
      {section.type === 'projects' && (
        <ul className="project-list">
          {section.items.map((item) => (
            <li key={item.name}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default ResumeSection
