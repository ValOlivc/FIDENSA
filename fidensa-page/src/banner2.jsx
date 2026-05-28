import slideImg from './assets/banner2.png'
import './banner2.css'

const BENEFICIOS = [
  'Acompañamiento personalizado',
  'Acceso a mayores montos de crédito de pago puntual',
  'Reuniones cerca de tu zona',
  'Tasa de interes competitiva',
  'Evaluación rapida y flexible',
]

export default function Banner2({ activeBanner, onSelectBanner }) {
  return (
    <section className="crediMujer" aria-label="Carrusel de créditos para mujeres">
      <div className="crediMujer__inner">
        <div className="crediMujer__text">
          <h1 className="crediMujer__title">
            CREDI<span className="crediMujer__titleAccent">Mujer</span>
          </h1>

          <p className="crediMujer__lead">Dirigido a mujeres emprendedoras o comerciantes</p>

          <h2 className="crediMujer__subtitle">BENEFICIOS</h2>
          <ul className="crediMujer__list">
            {BENEFICIOS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <button className="crediMujer__cta" type="button">
            Solicita tu crédito
          </button>
        </div>

        <div className="crediMujer__media">
          <span className="crediMujer__dot crediMujer__dot--orange" aria-hidden="true" />
          <img className="crediMujer__photo" src={slideImg} alt="Mujeres emprendedoras" />
          <span className="crediMujer__dot crediMujer__dot--yellow" aria-hidden="true" />
        </div>
      </div>
      <div className="crediMujer__indicators" aria-label="Selector de carrusel">
        {[0, 1].map((index) => (
          <button
            key={index}
            type="button"
            className="crediMujer__indicatorButton"
            aria-label={`Ir al banner ${index + 1}`}
            aria-current={index === activeBanner}
            onClick={() => onSelectBanner(index)}
          />
        ))}
      </div>
    </section>
  )
}
