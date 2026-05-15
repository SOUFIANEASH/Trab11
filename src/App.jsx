import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar   from './components/Navbar'
import Footer   from './components/Footer'
import Home      from './pages/Home'
import About     from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact   from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact"   element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="page">
              <p className="page__tag">404</p>
              <h1 className="page__title">Page not found.</h1>
              <p className="page__lead">The route you requested does not exist.</p>
            </div>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
