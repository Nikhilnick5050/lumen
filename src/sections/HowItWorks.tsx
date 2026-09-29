const STEPS = [
  { n: '01', title: 'Install the snippet', desc: 'Drop one line of code into your app. Lumen starts capturing events instantly.' },
  { n: '02', title: 'Define your events', desc: 'Track clicks, signups, and conversions with auto-capture or custom events.' },
  { n: '03', title: 'Explore insights', desc: 'Build funnels, cohorts, and dashboards to answer any product question.' },
]

export default function HowItWorks() {
  return (
    <section className="section section--alt" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From install to insight in minutes</h2>
          <p>No data team required. Get your first dashboard live before your coffee gets cold.</p>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <span className="step__num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}