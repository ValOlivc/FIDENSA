import { useEffect, useState } from 'react'
import './header.css'
import logoFidensa from '../assets/LOGO-FIDENSA.png'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: '¿Cómo funciona?', href: '#como-funciona' },
  { label: 'Habla con un Asesor', href: '#asesor' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>      <a className="header__brand" href="/" aria-label="FIDENSA GROUP - Inicio">
        <img
          className="header__logo"
          src={logoFidensa}
          alt=""
          width={52}
          height={52}
        />
        <div className="header__wordmark">
          <span className="header__title">FIDENSA</span>
          <span className="header__subtitle">GROUP</span>
        </div>
      </a>

      <nav aria-label="Principal">
        <ul className="header__nav">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a className="header__link" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
