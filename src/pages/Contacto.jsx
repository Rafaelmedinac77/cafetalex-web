export default function Contacto() {
  return (
    <section id="contacto" className="section contact-section">
      <div className="contact-content">
        <div className="contact-info">
          <p className="eyebrow">Contacto y reservas</p>

          <h2>Visítanos en Pereira</h2>

          <p className="contact-text">
            Disfruta cafés especiales, desayunos, comidas artesanales,
            postres y bebidas en un ambiente acogedor en La Lorena.
          </p>

          <div className="contact-badges">
            <span>📍 Pereira</span>
            <span>☕ Café especial</span>
            <span>🍰 Postres artesanales</span>
          </div>

          <div className="contact-data">
            <p>
              <strong>Dirección:</strong><br />
              Cl. 21 Bis #17B-03<br />
              La Lorena<br />
              Pereira, Risaralda
            </p>

            <p>
              <strong>WhatsApp:</strong><br />
              +57 300 782 3310
            </p>

            <p>
              <strong>Instagram:</strong><br />
              @cafetalex_pereira
            </p>

            <p>
              <strong>Email:</strong><br />
              cafetalexpereira@gmail.com
            </p>
          </div>

          <div className="contact-actions">
            <a
              href="https://wa.me/573007823310"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              Reservar por WhatsApp
            </a>

            <a
              href="https://share.google/ipZqXPKTwfeqwY5z"
              target="_blank"
              rel="noreferrer"
              className="btn dark-btn"
            >
              Ver ubicación
            </a>
          </div>
        </div>

        <div className="map-card">
          <iframe
  title="Ubicación Cafetalex Pereira"
  src="https://www.google.com/maps?q=Cafetalex%20tienda%20de%20caf%C3%A9%20y%20Restaurante%20Pereira&output=embed"
  loading="lazy"
  allowFullScreen
/>
        </div>
      </div>
    </section>
  )
}