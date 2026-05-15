import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'

export default function Portfolio() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)

  useEffect(() => {
    // Fetch project list using Axios
    axios.get('/data/projects.json')
      .then(res => {
        setProjects(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="page"><Loader message="Loading projects…" /></div>
  if (error)   return <div className="page"><p className="error">Error: {error}</p></div>

  return (
    <div className="page">
      <p className="page__tag">Portfolio</p>
      <h1 className="page__title">My work.</h1>
      <p className="page__lead">
        Projects developed throughout the course and beyond. <code></code>  <strong></strong>
      </p>

      <div className="projects-grid">
        {projects.map(project => (
          <article className="project-card" key={project.id}>
            <div className="project-card__header">
              <span className="project-card__id">#{String(project.id).padStart(2, '0')}</span>
              <span className="project-card__year">{project.year}</span>
            </div>

            <h2 className="project-card__title">{project.title}</h2>

            {project.highlight && (
              <span className="project-card__highlight">Featured</span>
            )}

            <p className="project-card__desc">{project.description}</p>

            <div className="project-card__tech">
              {project.tech.map(t => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
