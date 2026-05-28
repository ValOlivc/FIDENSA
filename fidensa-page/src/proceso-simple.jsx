import './proceso-simple.css'

const STEPS = [
  {
    number: '01',
    title: 'Solicita en línea',
    description:
      'Contáctanos por WhatsApp o llena el formulario. Solo toma 5 minutos desde cualquier dispositivo.',
  },
  {
    number: '02',
    title: 'Evaluación rápida',
    description:
      'Nuestro equipo revisa tu solicitud y te da una respuesta preliminar en menos de 2 horas.',
  },
  {
    number: '03',
    title: 'Tu asesor te llama',
    description:
      'Un asesor personal te contacta para coordinar los detalles y resolver todas tus dudas.',
  },
  {
    number: '04',
    title: '¡Recibe tu dinero!',
    description:
      'Aprobado el crédito, el desembolso se realiza en 24 horas. Así de simple.',
  },
]

export default function ProcesoSimple() {
  return (
    <section
      id="como-funciona"
      className="proceso"
      aria-labelledby="proceso-title"
    >
      <div className="proceso__inner">
        <header className="proceso__header">
          <p className="proceso__label">PROCESO SIMPLE</p>
          <h2 id="proceso-title" className="proceso__title">
            ¿Cómo funciona?
          </h2>
        </header>

        <div className="proceso__grid">
          {STEPS.map(({ number, title, description }) => (
            <article key={number} className="proceso__card">
              <span className="proceso__number">{number}</span>
              <h3 className="proceso__cardTitle">{title}</h3>
              <p className="proceso__cardText">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
