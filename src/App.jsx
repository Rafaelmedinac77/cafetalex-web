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
  return (
    <div className="site">
      <header className="navbar">
        <a href="#inicio" className="brand">
          <img src={logo} alt="Cafetalex" />
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#carta">Carta</a>
          <a href="#favoritos">Favoritos</a>
          <a href="#origen">Origen</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#horarios">Horarios</a>
          <a href="#contacto">Contacto</a>
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