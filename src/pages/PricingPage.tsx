import Pricing from '../sections/Pricing'

export default function PricingPage() {
  return (
    <div style={{ paddingTop: 'var(--space-12, 80px)', minHeight: '70vh' }}>
      <div className="container">
        <a href="#home" className="navbar__link">← Back to home</a>
      </div>
      <Pricing />
    </div>
  )
}
