import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Carta from './pages/Carta'
import Favoritos from './pages/Favoritos'
import Origen from './pages/Origen'
import Experiencia from './pages/Experiencia'
import Horarios from './pages/Horarios'
import Contacto from './pages/Contacto'
import logo from './assets/cafetalex-logo.webp'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="site">
      <header className="navbar">
        <a href="#inicio" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Cafetalex" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#carta" onClick={closeMenu}>Carta</a>
          <a href="#favoritos" onClick={closeMenu}>Favoritos</a>
          <a href="#origen" onClick={closeMenu}>Origen</a>
          <a href="#experiencia" onClick={closeMenu}>Experiencia</a>
          <a href="#horarios" onClick={closeMenu}>Horarios</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>

        <a
          className="nav-button"
          href="https://wa.me/573007823310"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </header>

      <main>
        <Home />
        <Carta />
        <Favoritos />
        <Origen />
        <Experiencia />
        <Horarios />
        <Contacto />
      </main>

      <footer className="footer">
        <img src={logo} alt="Cafetalex" />
        <p>Cafetalex © Todos los derechos reservados.</p>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/573007823310"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default App