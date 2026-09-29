import Button from '../components/Button'
import { useToast } from '../hooks/useToast'

export default function FinalCTA() {
  const { push } = useToast()
  return (
    <section className="section" id="cta">
      <div className="container">
        <div className="cta">
          <h2>Ready to see your product clearly?</h2>
          <p>Join 4,000+ teams making data-driven decisions with Lumen.</p>
          <div className="cta__actions">
            <Button size="lg" onClick={() => push('success', 'Trial started! Check your inbox for next steps.')}>Start free trial</Button>
            <Button size="lg" variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Talk to sales</Button>
          </div>
        </div>
      </div>
    </section>
  )
}