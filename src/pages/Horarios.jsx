export default function Horarios() {
  return (
    <section id="horarios" className="section horarios-section">
      <div className="section-header center">
        <p className="eyebrow">Horarios</p>

        <h2>Te esperamos en Cafetalex</h2>

        <p>
          Reserva tu mesa y disfruta café, comida, postres y bebidas especiales
          en La Lorena, Pereira.
        </p>
      </div>

      <div className="horario-card">
        <div>
          <h3>Lunes a Sábado</h3>
          <p>2:00 PM – 10:00 PM</p>
          <small>Domingos y festivos consultar disponibilidad.</small>

          <p className="rating">
            ⭐⭐⭐⭐⭐ 4.6/5 en Google
          </p>
        </div>

        <a
          href="https://wa.me/573007823310"
          target="_blank"
          rel="noreferrer"
          className="btn primary"
        >
          Reservar mesa
        </a>
      </div>
    </section>
  )
}