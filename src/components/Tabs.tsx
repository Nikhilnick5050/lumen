import { useState, type ReactNode } from 'react'

interface Tab { id: string; label: string; content: ReactNode }

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id)
  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist">
        {tabs.map((t) => (
          <button key={t.id} role="tab" aria-selected={active === t.id} className={`tabs__tab ${active === t.id ? 'is-active' : ''}`} onClick={() => setActive(t.id)}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="tabs__panel" role="tabpanel">{tabs.find((t) => t.id === active)?.content}</div>
    </div>
  )
}