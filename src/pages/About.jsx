import { useState, useEffect } from 'react'
import Loader from '../components/Loader'

export default function About() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch profile data using the native Fetch API
    fetch('/data/about.json')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
        return res.json()
      })
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="page"><Loader message="Loading profile…" /></div>
  if (error)   return <div className="page"><p className="error">Error: {error}</p></div>

  return (
    <div className="page">
      <p className="page__tag">About</p>
      <h1 className="page__title">Who I am.</h1>

      <div className="about-grid">
        {/* Bio text */}
        <div>
          <p className="about-bio">{data.bio}</p>

          <div className="skills-section">
            <p className="skills-heading">Skills &amp; Technologies</p>
            <div className="skills-list">
              {data.skills.map(skill => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Key–value info table */}
        <div className="about-meta">
          <div className="about-row">
            <span className="about-row__key">Name</span>
            <span className="about-row__val">{data.name}</span>
          </div>
          <div className="about-row">
            <span className="about-row__key">Number</span>
            <span className="about-row__val">{data.number}</span>
          </div>
          <div className="about-row">
            <span className="about-row__key">Role</span>
            <span className="about-row__val">{data.role}</span>
          </div>
          <div className="about-row">
            <span className="about-row__key">Location</span>
            <span className="about-row__val">{data.location}</span>
          </div>
          <div className="about-row">
            <span className="about-row__key">Email</span>
            <span className="about-row__val">{data.email}</span>
          </div>
          <div className="about-row">
            <span className="about-row__key">GitHub</span>
            <span className="about-row__val">{data.github}</span>
          </div>
          <div className="about-row">
            <span className="about-row__key">LinkedIn</span>
            <span className="about-row__val">{data.linkedin}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
