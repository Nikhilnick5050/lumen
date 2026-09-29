import Card from '../components/Card'

const BENEFITS = [
  { title: 'Product teams', desc: 'Ship features backed by evidence, not guesswork. See what users actually use.' },
  { title: 'Growth teams', desc: 'Find your best acquisition channels and double down on what converts.' },
  { title: 'Engineering', desc: 'Debug faster with session replay and realtime event streams.' },
  { title: 'Leadership', desc: 'Get a single source of truth for the metrics that move the business.' },
]

export default function Benefits() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Use cases</span>
          <h2>Built for every team that ships</h2>
          <p>One platform, tailored views for every role in your company.</p>
        </div>
        <div className="benefits-grid">
          {BENEFITS.map((b) => (
            <Card key={b.title} className="benefit-card">
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}