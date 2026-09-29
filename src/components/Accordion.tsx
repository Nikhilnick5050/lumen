import { useState, type ReactNode } from 'react'

interface Item { q: string; a: ReactNode }

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="accordion">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div className={`accordion__item ${isOpen ? 'is-open' : ''}`} key={i}>
            <button className="accordion__trigger" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`faq-panel-${i}`}>
              <span>{it.q}</span>
              <span className="accordion__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="accordion__panel" id={`faq-panel-${i}`} role="region" hidden={!isOpen}>
              <div className="accordion__content">{it.a}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}