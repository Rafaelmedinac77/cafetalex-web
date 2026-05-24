export default function Experiencia() {
  const destacados = [
    'Desayunos corporativos',
    'Reservas para grupos',
    'Café de especialidad',
    'Comidas artesanales',
    'Postres y tortas',
    'Cócteles y bebidas frías'
  ]

  return (
    <section id="experiencia" className="section dark">
      <div className="section-header center">
        <p className="eyebrow">Experiencia Cafetalex</p>
        <h2>Un lugar para desayunar, trabajar, reunirse y celebrar</h2>
        <p>
          Reserva tu mesa, pide a domicilio o ven a disfrutar una experiencia
          completa con café, comida y bebidas especiales.
        </p>
      </div>

      <div className="experience-grid">
        {destacados.map((item) => (
          <div key={item}>
            <h3>{item}</h3>
            <p>Una opción pensada para disfrutar Cafetalex a tu manera.</p>
          </div>
        ))}
      </div>
    </section>
  )
}