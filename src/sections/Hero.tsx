import Button from '../components/Button'
import { useToast } from '../hooks/useToast'

export default function Hero() {
  const { push } = useToast()
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge"><span className="hero__dot" aria-hidden="true" />New: Session Replay is live</span>
          <h1 className="hero__title">Understand your product, <span className="hero__accent">in real time.</span></h1>
          <p className="hero__sub">Lumen turns raw product events into clear, actionable insights. Track funnels, retention, and user behavior — no SQL required.</p>
          <div className="hero__cta">
            <Button size="lg" onClick={() => push('success', 'Welcome to Lumen! Your workspace is being prepared.')}>Start free trial</Button>
            <Button size="lg" variant="secondary" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>See how it works</Button>
          </div>
          <p className="hero__note">Free 14-day trial · No credit card required</p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="dashboard">
            <div className="dashboard__bar">
              <span className="dashboard__dots"><i /><i /><i /></span>
              <span className="dashboard__title">Lumen · Overview</span>
              <span className="dashboard__live">● Live</span>
            </div>
            <div className="dashboard__body">
              <div className="dashboard__kpis">
                <div className="kpi"><span className="kpi__label">Active users</span><span className="kpi__value">48,291</span><span className="kpi__delta up">▲ 12.4%</span></div>
                <div className="kpi"><span className="kpi__label">Conversion</span><span className="kpi__value">6.8%</span><span className="kpi__delta up">▲ 2.1%</span></div>
                <div className="kpi"><span className="kpi__label">Churn</span><span className="kpi__value">1.9%</span><span className="kpi__delta down">▼ 0.4%</span></div>
              </div>
              <div className="dashboard__chart">
                <svg viewBox="0 0 400 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34D399" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,90 C40,80 60,60 90,62 C120,64 140,40 180,44 C220,48 240,70 280,52 C320,34 360,20 400,24 L400,120 L0,120 Z" fill="url(#g)" />
                  <path d="M0,90 C40,80 60,60 90,62 C120,64 140,40 180,44 C220,48 240,70 280,52 C320,34 360,20 400,24" fill="none" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}