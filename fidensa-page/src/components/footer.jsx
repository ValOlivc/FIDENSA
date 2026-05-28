import './footer.css'
import logoFooter from '../assets/LOGO-footer.png'

const COMPANY_LINKS = [
  'Servicios',
  'Nosotros',
  'Atención al cliente',
  'Pasos para tener tu credito',
  'Contáctanos',
]

const SOCIAL_LINKS = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__card">
        <div className="footer__left">
          <img
            src={logoFooter}
            alt="FIDENSA GROUP"
            className="footer__logo"
            width={200}
            height={64}
          />

          <p className="footer__text">
            Creemos en el esfuerzo de cada persona.
            <br />
            Por eso, ofrecemos oportunidades financieras que ayudan a impulsar
            negocios,
            <br />
            proyectos y sueños.
          </p>

          <div className="footer__social-icons">
            <span className="footer__icon">in</span>
            <span className="footer__icon">f</span>
            <span className="footer__icon">ig</span>
            <span className="footer__icon">x</span>
          </div>
        </div>

        <div className="footer__columns">
          <div className="footer__column">
            <h3 className="footer__heading">COMPAÑIA</h3>
            <ul>
              {COMPANY_LINKS.map((item) => (
                <li key={item}>
                  <a href="#" className="footer__link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">SOCIAL</h3>
            <ul>
              {SOCIAL_LINKS.map((item) => (
                <li key={item}>
                  <a href="#" className="footer__link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © 2026 FIDENSA - All rights reserved - Designed and developed by
          Valyra Studio.
        </p>
      </div>
    </footer>
  )
}
