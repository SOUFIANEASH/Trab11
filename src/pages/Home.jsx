import { Link } from 'react-router-dom'

const AUTHORS = [
  { name: 'Soufiane Achouch', number: '28638' },
]

export default function Home() {
  return (
    <div className="home">
      

      <h1 className="home__name">
        Hello,<br />
        I'm <em>Soufiane</em><br />
        Achouch.
      </h1>

      <p className="home__role">Computer Science Student & Developer · Vilnius, Lithuania</p>

      <div className="home__links">
        <Link to="/about"><button>About me</button></Link>
        <Link to="/portfolio"><button>Portfolio</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </div>

      <div className="home__authors">
        <p className="home__authors-label">Authors</p>
        {AUTHORS.map(a => (
          <div className="home__author" key={a.number}>
            <strong>{a.name}</strong>
            <span>Nº {a.number}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
