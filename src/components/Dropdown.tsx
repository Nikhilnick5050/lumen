import { useEffect, useRef, useState, type ReactNode } from 'react'

interface Item { label: string; value: string }
interface Props { label: string; items: Item[]; value: string; onChange: (v: string) => void; button?: ReactNode }

export default function Dropdown({ label, items, value, onChange, button }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])
  const current = items.find((i) => i.value === value)
  return (
    <div className="dropdown" ref={ref}>
      <button className="dropdown__trigger" onClick={() => setOpen((o) => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label={label}>
        {button ?? <span>{current?.label ?? label}</span>}
        <span className="dropdown__chevron" aria-hidden="true">▾</span>
      </button>
      {open && (
        <ul className="dropdown__menu" role="listbox" aria-label={label}>
          {items.map((it) => (
            <li key={it.value}>
              <button role="option" aria-selected={it.value === value} className={`dropdown__item ${it.value === value ? 'is-active' : ''}`} onClick={() => { onChange(it.value); setOpen(false) }}>
                {it.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}