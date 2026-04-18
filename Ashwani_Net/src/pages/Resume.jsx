import { useEffect, useState } from 'react'
import ResumeSection from '../components/ResumeSection'
import { getResume } from '../services/api'

function Resume() {
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getResume()
      .then((data) => {
        setSections(data)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  const summarySection = sections.find((section) => section.type === 'summary')
  const sidebarSections = sections.filter((section) =>
    ['contact', 'skills', 'education', 'certifications'].includes(section.type),
  )
  const mainSections = sections.filter((section) =>
    ['summary', 'experience', 'projects'].includes(section.type),
  )

  return (
    <section className="page resume-page">
      <div className="page-header">
        <p className="eyebrow">Professional Resume</p>
        <h2>Full-stack Engineer with Interview and Blog expertise</h2>
        <p className="section-copy">
          A modern resume layout highlighting experience, skills, education, and
          interview-ready technical strengths.
        </p>
        <a className="button primary" href="/AshwaniKumar_Resume.pdf" download>
          Download Resume
        </a>
      </div>

      {loading && <p>Loading resume content...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <div className="resume-layout">
          <aside className="resume-sidebar">
            {summarySection && (
              <div className="profile-card">
                <img src="/pic.jpeg" alt={summarySection.name || 'Profile'} className="profile-photo" />
                <div className="profile-summary">
                  <h1>{summarySection.name || 'Ashwani Kumar'}</h1>
                  <p className="profile-role">{summarySection.headline || 'Full-stack Engineer'}</p>
                  <p className="profile-location">{summarySection.location || 'Bangalore, India'}</p>
                </div>
              </div>
            )}
            {sidebarSections.map((section) => (
              <ResumeSection key={section._id} section={section} />
            ))}
          </aside>

          <div className="resume-main">
            {summarySection && <ResumeSection section={summarySection} />}
            {mainSections
              .filter((section) => section.type !== 'summary')
              .map((section) => (
                <ResumeSection key={section._id} section={section} />
              ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Resume
