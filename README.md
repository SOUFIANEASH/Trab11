# Trab11 — Personal Website in ReactJS
Practical Work No. 11 · 

## Authors
| Name | Number |
|------|--------|
| Student Name | 28638 |

---

## About
Continuation of Trab10. A multi-page personal website built with ReactJS demonstrating:

- **React Router v6** — client-side routing with `<BrowserRouter>`, `<Routes>`, `<Route>`, `<NavLink>`
- **Fetch API** — native browser fetching (About page, Contact page)
- **Axios** — HTTP library (Portfolio page)
- **React Hooks** — `useState` and `useEffect` throughout
- **Component architecture** — `Navbar`, `Footer`, `Loader` shared components

---

## Pages & Routes

| Path | Page | Data Source | Method |
|------|------|-------------|--------|
| `/` | Home | — | — |
| `/about` | About | `/data/about.json` | Fetch API |
| `/portfolio` | Portfolio | `/data/projects.json` | Axios |
| `/contact` | Contact | `/data/contact.json` | Fetch API |

---

## Getting Started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

---

## Project Structure
```
Trab11_28638/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── data/
│       ├── about.json      ← profile data
│       ├── projects.json   ← portfolio projects
│       └── contact.json    ← contact info
└── src/
    ├── main.jsx            ← entry point
    ├── App.jsx             ← router setup
    ├── index.css           ← global styles
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   └── Loader.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx       ← Fetch API
        ├── Portfolio.jsx   ← Axios
        └── Contact.jsx     ← Fetch API
```

