import { useState, useEffect } from 'react'
import Loader from '../components/Loader'

export default function Contact() {
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    // Fetch contact data using the native Fetch API
    fetch('/data/contact.json')
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

  if (loading) return <div className="page"><Loader message="Loading contact info…" /></div>
  if (error)   return <div className="page"><p className="error">Error: {error}</p></div>

  return (
    <div className="page">
      <p className="page__tag">Contact</p>
      <h1 className="page__title">Get in touch.</h1>
      <p className="page__lead">
        Feel free to reach out for collaborations, questions, or just to say hello.
      </p>

      <div className="contact-grid">
        {/* Contact details table */}
        <div>
          <div className="contact-info">
            <div className="contact-row">
              <span className="contact-row__key">Email</span>
              <span className="contact-row__val">
                <a href={`mailto:${data.email_student}`}>{data.email_student}</a>
              </span>
            </div>
            <div className="contact-row">
              <span className="contact-row__key">Personal</span>
              <span className="contact-row__val">
                <a href={`mailto:${data.email_personal}`}>{data.email_personal}</a>
              </span>
            </div>
            <div className="contact-row">
              <span className="contact-row__key">Phone</span>
              <span className="contact-row__val">{data.phone}</span>
            </div>
            <div className="contact-row">
              <span className="contact-row__key">Skype</span>
              <span className="contact-row__val">
                <a href={`skype:${data.skype}?call`}>{data.skype}</a>
              </span>
            </div>
            <div className="contact-row">
              <span className="contact-row__key">Location</span>
              <span className="contact-row__val">{data.location}</span>
            </div>
            <div className="contact-row">
              <span className="contact-row__key">Status</span>
              <span className="contact-row__val">{data.availability}</span>
            </div>
          </div>

          {/* Social links */}
          <div className="contact-social">
            <p className="contact-social__heading">Social & Online</p>
            {data.social.map(s => (
              <a
                key={s.label}
                className="social-link"
                href={s.url}
                target="_blank"
                rel="noreferrer"
              >
                <span>{s.label}</span>
                <span className="social-link__handle">{s.handle}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Note card */}
        <div className="contact-note">
          <strong>A note</strong>
          I'm a Computer Science student at Vilnius College, originally from Morocco.
          I'm open to collaborations, internships, and interesting projects.
          I communicate in Arabic, French and English 
        </div>
      </div>
    </div>
  )
}
