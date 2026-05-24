export default function Carta() {
  const categorias = [
    {
      titulo: 'Cafés calientes',
      imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
      items: ['Espresso', 'Americano', 'Latte', 'Cappuccino', 'Moccacino', 'Café bombón']
    },
    {
      titulo: 'Bebidas frías',
      imagen: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop',
      items: ['Cold brew', 'Latte frío', 'Té de café', 'Granizados', 'Frappes', 'Limonadas']
    },
    {
      titulo: 'Comidas',
      imagen: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
      items: ['Arepa burger', 'Arepa mixta', 'Wrap mixto', 'Sandwich mixto', 'Nachos', 'Ensalada gourmet']
    },
    {
      titulo: 'Repostería',
      imagen: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop',
      items: ['Tiramisú', 'Torta genovesa', 'Brownie con helado', 'Galletas artesanales', 'Torta de zanahoria']
    },
    {
      titulo: 'Bar y cocteles',
      imagen: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
      items: ['Mojito', 'Margarita', 'Daiquirí', 'Café irlandés', 'Vino de café', 'Micheladas']
    }
  ]

  return (
    <section id="carta" className="section coffee-section">
      <div className="section-header center">
        <p className="eyebrow">Explora nuestra carta</p>
        <h2>Mucho más que café</h2>
        <p>
          En Cafetalex encuentras cafés especiales, comidas artesanales,
          postres, bebidas frías y opciones para compartir.
        </p>
      </div>

      <div className="category-grid">
        {categorias.map((cat) => (
          <article className="category-card" key={cat.titulo}>
            <img src={cat.imagen} alt={cat.titulo} />

            <div className="category-content">
              <h3>{cat.titulo}</h3>

              <ul>
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a
                href="https://wa.me/573007823310"
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                Pedir por WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}