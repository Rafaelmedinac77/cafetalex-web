import logo from '../assets/cafetalex-logo.webp'

export default function Home() {
  return (
    <section id="inicio" className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/hero-coffee.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <img src={logo} alt="Cafetalex" className="hero-logo" />

        <p className="eyebrow">Cafetería · Restaurante · Experiencia</p>

        <h1>Café, gastronomía y momentos especiales en Pereira</h1>

        <p className="hero-text">
          Disfruta cafés especiales, desayunos, comidas artesanales, postres,
          bebidas frías y cocteles en un espacio creado para compartir.
        </p>

        <div className="hero-actions">
          <a href="#carta" className="btn primary">Ver carta</a>
          <a href="#contacto" className="btn secondary">Reservar mesa</a>
        </div>
      </div>
    </section>
  )
}