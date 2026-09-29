import Card from '../components/Card'

const QUOTES = [
  { quote: 'Lumen replaced three tools for us. We finally have one place to see the whole funnel.', name: 'Maya Chen', role: 'Head of Product, Northwind' },
  { quote: 'The realtime events are a game changer. We catch issues before users even report them.', name: 'Daniel Okafor', role: 'CTO, Brightline' },
  { quote: 'Setup took five minutes. The insights started flowing immediately. Incredible product.', name: 'Sofia Reyes', role: 'Growth Lead, Loopwork' },
]

export default function Testimonials() {
  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>Loved by teams who ship fast</h2>
          <p>Don't take our word for it — here's what our customers say.</p>
        </div>
        <div className="testimonials-grid">
          {QUOTES.map((t) => (
            <Card key={t.name} className="testimonial">
              <div className="testimonial__stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>“{t.quote}”</blockquote>
              <div className="testimonial__author">
                <span className="testimonial__avatar" aria-hidden="true">{t.name.split(' ').map((w) => w[0]).join('')}</span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}