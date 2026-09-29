import Card from '../components/Card'

const FEATURES = [
  { icon: '◉', title: 'Funnels', desc: 'See exactly where users drop off and fix the leaks in your conversion flow.' },
  { icon: '◈', title: 'Retention', desc: 'Cohort analysis that shows how sticky your product really is over time.' },
  { icon: '▤', title: 'Dashboards', desc: 'Drag-and-drop boards that give every team the metrics that matter to them.' },
  { icon: '⚡', title: 'Realtime events', desc: 'Stream events live so you can react to what users do the moment they do it.' },
  { icon: '⌘', title: 'Session replay', desc: 'Watch real sessions to understand friction and delight your users.' },
  { icon: '⇄', title: 'Integrations', desc: 'Connect your stack with one-click integrations for data in and out.' },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Features</span>
          <h2>Everything you need to know your users</h2>
          <p>Powerful tools that turn raw data into decisions — built for speed and clarity.</p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <Card key={f.title} interactive className="feature-card">
              <span className="feature-card__icon" aria-hidden="true">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}