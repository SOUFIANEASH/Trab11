import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__brand">
        <strong>Soufiane Achouch</strong> · Portfolio
      </div>
      <NavLink to="/" end className={({ isActive }) => 'nav__link' + (isActive ? ' active' : '')}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => 'nav__link' + (isActive ? ' active' : '')}>
        About
      </NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => 'nav__link' + (isActive ? ' active' : '')}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => 'nav__link' + (isActive ? ' active' : '')}>
        Contact
      </NavLink>
    </nav>
  )
}
