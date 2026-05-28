import './banner3.css'
import iconCandado from './assets/icons/candado.png'
import iconRayo from './assets/icons/rayo.png'
import iconApreton from './assets/icons/apretón.png'
import iconWhatsapp from './assets/icons/whatsapp.png'

const ICONS = {
  lock: iconCandado,
  bolt: iconRayo,
  handshake: iconApreton,
  whatsapp: iconWhatsapp,
}

const FEATURES = [
  {
    title: '100% seguro',
    description: 'Información protegida y confidencial',
    icon: 'lock',
  },
  {
    title: 'Aprobación express',
    description: 'Respuesta en menos de 24 horas',
    icon: 'bolt',
  },
  {
    title: 'Sin fiador',
    description: 'Créditos accesibles sin garantías complejas',
    icon: 'handshake',
  },
  {
    title: 'Atención por WhatsApp',
    description: 'Tu asesor disponible cuando lo necesitas',
    icon: 'whatsapp',
  },
]

export default function Banner3() {
  return (
    <section className="banner3" aria-label="Beneficios FIDENSA">
      <div className="banner3__inner">
        {FEATURES.map(({ title, description, icon }) => (
          <article key={title} className="banner3__item">
            <div
              className={`banner3__iconWrap ${
                icon === 'whatsapp' ? 'banner3__iconWrap--purple' : ''
              }`}
            >
              <img
                src={ICONS[icon]}
                alt=""
                className="banner3__iconImg"
                width={28}
                height={28}
              />
            </div>
            <div className="banner3__text">
              <h2 className="banner3__title">{title}</h2>
              <p className="banner3__description">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
