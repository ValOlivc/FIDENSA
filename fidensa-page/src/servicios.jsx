import './servicios.css'
import imgIndividuales from './assets/servicios/creditos-individuales.svg'
import imgAtencion from './assets/servicios/atencion-inmediata.svg'
import imgGrupales from './assets/servicios/creditos-grupales.svg'

const SERVICES = [
  {
    title: 'Créditos Individuales',
    description:
      'Para emprendedores e independientes que buscan capital de trabajo o inversión personal. Montos flexibles según tu capacidad.',
    badge: 'Desde S/ 500',
    image: imgIndividuales,
    imageAlt: 'Créditos individuales',
    variant: 'light',
  },
  {
    title: 'Atención Inmediata',
    description:
      'Un asesor dedicado te contacta en menos de 2 horas para guiarte en todo el proceso sin complicaciones.',
    badge: 'Más solicitado',
    image: imgAtencion,
    imageAlt: 'Atención inmediata',
    variant: 'dark',
  },
  {
    title: 'Créditos Grupales',
    description:
      'Ideal para grupos de comerciantes o emprendedores. Mejores tasas y condiciones cuando aplican en conjunto.',
    badge: 'Mayor beneficio',
    image: imgGrupales,
    imageAlt: 'Créditos grupales',
    variant: 'light',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="servicios" aria-labelledby="servicios-title">
      <div className="servicios__inner">
        <header className="servicios__header">
          <p className="servicios__label">SERVICIOS</p>
          <h2 id="servicios-title" className="servicios__title">
            Lo que <span className="servicios__titleAccent">ofrecemos</span>
          </h2>
        </header>

        <div className="servicios__grid">
          {SERVICES.map(({ title, description, badge, image, imageAlt, variant }) => (
            <article
              key={title}
              className={`servicios__card servicios__card--${variant}`}
            >
              <div className="servicios__imageWrap">
                <img src={image} alt={imageAlt} className="servicios__image" />
              </div>

              <div className="servicios__body">
                <h3 className="servicios__cardTitle">{title}</h3>
                <p className="servicios__cardText">{description}</p>
                <span className="servicios__badge">{badge}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
