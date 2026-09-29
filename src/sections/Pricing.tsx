import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { useToast } from '../hooks/useToast'

const PLANS = [
  { id: 'starter', name: 'Starter', price: { monthly: 0, yearly: 0 }, tagline: 'For side projects', features: ['Up to 10k events/mo', '1 project', 'Core dashboards', '7-day data retention', 'Community support'] },
  { id: 'pro', name: 'Pro', price: { monthly: 49, yearly: 39 }, tagline: 'For growing teams', popular: true, features: ['Up to 1M events/mo', 'Unlimited projects', 'Funnels & cohorts', 'Session replay', '12-month retention', 'Priority support'] },
  { id: 'scale', name: 'Scale', price: { monthly: 199, yearly: 159 }, tagline: 'For large orgs', features: ['Unlimited events', 'SSO & SAML', 'Custom roles', 'Dedicated infra', '24/7 support', 'SLA guarantee'] },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)
  const { push } = useToast()
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2>Simple, transparent pricing</h2>
          <p>Start free, scale as you grow. No hidden fees, cancel anytime.</p>
        </div>
        <div className="billing-toggle" role="group" aria-label="Billing period">
          <button className={!yearly ? 'is-active' : ''} onClick={() => setYearly(false)} aria-pressed={!yearly}>Monthly</button>
          <button className={yearly ? 'is-active' : ''} onClick={() => setYearly(true)} aria-pressed={yearly}>Yearly <span className="billing-toggle__save">−20%</span></button>
        </div>
        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <Card key={plan.id} className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`}>
              {plan.popular && <span className="pricing-card__badge">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="pricing-card__tagline">{plan.tagline}</p>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">${yearly ? plan.price.yearly : plan.price.monthly}</span>
                <span className="pricing-card__period">/mo{yearly ? ' · billed yearly' : ''}</span>
              </div>
              <ul className="pricing-card__features">
                {plan.features.map((f) => <li key={f}><span aria-hidden="true">✓</span> {f}</li>)}
              </ul>
              <Button fullWidth variant={plan.popular ? 'primary' : 'secondary'} onClick={() => push('success', `${plan.name} plan selected — we'll be in touch!`)}>
                {plan.price.monthly === 0 ? 'Start free' : 'Choose ' + plan.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}