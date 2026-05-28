import { useEffect, useState } from 'react'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Banner1 from './banner1.jsx'
import Banner2 from './banner2.jsx'
import Banner3 from './banner3.jsx'
import Servicios from './servicios.jsx'
import ProcesoSimple from './proceso-simple.jsx'
import './App.css'

function App() {
  const [activeBanner, setActiveBanner] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveBanner((prev) => (prev === 0 ? 1 : 0))
    }, 10000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <Header />
      <div className="bannerSlider">
        <div
          className="bannerSlider__track"
          style={{ transform: `translateX(-${activeBanner * 50}%)` }}
        >
          <div className="bannerSlider__slide">
            <Banner1 activeBanner={activeBanner} onSelectBanner={setActiveBanner} />
          </div>
          <div className="bannerSlider__slide">
            <Banner2 activeBanner={activeBanner} onSelectBanner={setActiveBanner} />
          </div>
        </div>
      </div>

      <Banner3 />
      <Servicios />
      <ProcesoSimple />

      <main className="app">
        <section id="nosotros" className="app__section">
          <h2>Nosotros</h2>
        </section>
        <section id="asesor" className="app__section">
          <h2>Habla con un Asesor</h2>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
