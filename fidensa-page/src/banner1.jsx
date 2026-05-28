import slideImg from './assets/banner1.png'
import './banner1.css'

const BANNER = {
  titleLeft: 'CREDI',
  titleAccent: 'Avanza',
  description:
    'Impulsa tu trabajo con un crédito pensado para ti\n\nSi eres taxista, comerciante, albañil,\nemprendedor o independiente, tenemos una\nsolución financiera que se adapta a tu realidad.\nAccede a un crédito rápido, seguro y con\natención personalizada para ayudarte a seguir\ncreciendo.',
  cta: 'Solicita tu crédito',
  imageAlt: 'Crédito Avanza',
  imageSrc: slideImg,
}

export default function Banner1({ activeBanner, onSelectBanner }) {

  return (
    <section className="crediCarousel" aria-label="Carrusel de créditos">
      <div className="crediCarousel__inner">
        <div className="crediCarousel__text">
          <h1 className="crediCarousel__title">
            {BANNER.titleLeft}
            <span className="crediCarousel__titleAccent">
              {BANNER.titleAccent}
            </span>
          </h1>
          <p className="crediCarousel__description">{BANNER.description}</p>
          <button className="crediCarousel__cta" type="button">
            {BANNER.cta}
          </button>
        </div>

        <div className="crediCarousel__media">
          <span
            className="crediCarousel__dot crediCarousel__dot--orange"
            aria-hidden="true"
          />
          <img
            className="crediCarousel__photo"
            src={BANNER.imageSrc}
            alt={BANNER.imageAlt}
          />
          <span
            className="crediCarousel__dot crediCarousel__dot--yellow"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="crediCarousel__dots" aria-label="Selector de carrusel">
        {[0, 1].map((index) => (
          <button
            key={index}
            type="button"
            className="crediCarousel__dotButton"
            aria-label={`Ir al banner ${index + 1}`}
            aria-current={index === activeBanner}
            onClick={() => onSelectBanner(index)}
          />
        ))}
      </div>
    </section>
  )
}
