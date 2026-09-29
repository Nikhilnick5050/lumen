import Accordion from '../components/Accordion'

const FAQS = [
  { q: 'How does the free trial work?', a: 'Every plan starts with a full-featured 14-day trial. No credit card required — upgrade only when you are ready.' },
  { q: 'Can I change plans later?', a: 'Yes. Upgrade, downgrade, or cancel anytime from your billing settings. Changes apply at the start of your next cycle.' },
  { q: 'Is my data secure?', a: 'Lumen is SOC 2 Type II compliant with encryption at rest and in transit. Your data is never sold or shared.' },
  { q: 'Do you offer discounts for startups?', a: 'We offer a 50% discount for early-stage startups and non-profits. Reach out to our team to apply.' },
  { q: 'What counts as an event?', a: 'An event is any tracked action — a page view, click, signup, or custom event you define. Auto-capture makes this effortless.' },
  { q: 'Can I export my data?', a: 'Absolutely. Export raw events or aggregated reports to CSV, or stream to your warehouse via our API.' },
]

export default function FAQ() {
  return (
    <section className="section section--alt" id="faq">
      <div className="container container--narrow">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
          <p>Everything you need to know before getting started.</p>
        </div>
        <Accordion items={FAQS} />
      </div>
    </section>
  )
}