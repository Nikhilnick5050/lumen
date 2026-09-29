import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface Props { open: boolean; onClose: () => void; title: string; children: ReactNode }

export default function Modal({ open, onClose, title, children }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, onClose])
  if (!open) return null
  return createPortal(
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div className="modal" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <div className="modal__head">
          <h3>{title}</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close dialog">✕</button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>,
    document.body,
  )
}