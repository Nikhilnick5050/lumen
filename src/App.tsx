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
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import Contact from './sections/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Benefits />
          <Stats />
          <Testimonials />
          <Pricing />
          <FAQ />
          <FinalCTA />
          <Contact />
        </main>
        <Footer />
      </ToastProvider>
    </ThemeProvider>
  )
}