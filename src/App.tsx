import { useEffect, useState } from 'react'
import { ThemeProvider } from './theme'
import { ToastProvider } from './hooks/useToast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Benefits from './sections/Benefits'
import Stats from './sections/Stats'
import Testimonials from './sections/Testimonials'
import PricingPage from './pages/PricingPage'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import Contact from './sections/Contact'

const isPricingRoute = () => window.location.hash === '#/pricing'

export default function App() {
  const [onPricing, setOnPricing] = useState(isPricingRoute())

  useEffect(() => {
    const onHash = () => setOnPricing(isPricingRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (isPricingRoute()) {
      window.scrollTo(0, 0)
      return
    }
    const id = window.location.hash.replace('#', '')
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    else window.scrollTo(0, 0)
  }, [onPricing])

  return (
    <ThemeProvider>
      <ToastProvider>
        <Navbar />
        <main>
          {onPricing ? (
            <PricingPage />
          ) : (
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <Benefits />
              <Stats />
              <Testimonials />
              <FAQ />
              <FinalCTA />
              <Contact />
            </>
          )}
        </main>
        <Footer />
      </ToastProvider>
    </ThemeProvider>
  )
}