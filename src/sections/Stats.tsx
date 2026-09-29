const STATS = [
  { value: '12B+', label: 'events processed monthly' },
  { value: '4,000+', label: 'teams trust Lumen' },
  { value: '99.99%', label: 'uptime SLA' },
  { value: '<50ms', label: 'query latency' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat__value">{s.value}</span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}