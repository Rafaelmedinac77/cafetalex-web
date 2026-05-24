export default function Favoritos() {
  const favoritos = [
    {
      nombre: 'Cappuccino',
      categoria: 'Café caliente',
      precio: '$8.9',
      imagen:
        'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1200&auto=format&fit=crop',
      descripcion: 'Espresso doble con leche cremosa y una textura suave.'
    },
    {
      nombre: 'Cold Brew',
      categoria: 'Bebida fría',
      precio: '$10.9',
      imagen:
        'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=1200&auto=format&fit=crop',
      descripcion: 'Extracción en frío con agua a temperatura ambiente.'
    },
    {
      nombre: 'Arepa Burger',
      categoria: 'Comida',
      precio: '$20.9',
      imagen:
        'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
      descripcion: 'Arepa casera con carne, queso, tocineta, papitas y salsa.'
    },
    {
      nombre: 'Tiramisú',
      categoria: 'Repostería',
      precio: '$12.9',
      imagen:
        'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1200&auto=format&fit=crop',
      descripcion: 'Postre frío con café, crema y textura suave.'
    }
  ]

  return (
    <section id="favoritos" className="section favorites-section">
      <div className="section-header center">
        <p className="eyebrow">Favoritos de la casa</p>
        <h2>Los productos que más disfrutan nuestros clientes</h2>
        <p>
          Una selección de cafés, comidas y postres para vivir la experiencia
          Cafetalex desde el primer pedido.
        </p>
      </div>

      <div className="favorites-grid">
        {favoritos.map((item) => (
          <article className="favorite-card" key={item.nombre}>
            <div className="favorite-image">
              <img src={item.imagen} alt={item.nombre} />
              <span>{item.precio}</span>
            </div>

            <div className="favorite-content">
              <p className="favorite-category">{item.categoria}</p>
              <h3>{item.nombre}</h3>
              <p>{item.descripcion}</p>

              <a
                href="https://wa.me/573007823310"
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                Pedir ahora
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}