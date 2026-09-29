import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

export type ToastKind = 'success' | 'error' | 'info'
export interface Toast { id: number; kind: ToastKind; message: string }
interface ToastCtx { push: (kind: ToastKind, message: string) => void }
const Ctx = createContext<ToastCtx | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const push = useCallback((kind: ToastKind, message: string) => {
    const id = Date.now() + Math.random()
    setToasts((t) => [...t, { id, kind, message }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4200)
  }, [])
  const dismiss = (id: number) => setToasts((t) => t.filter((x) => x.id !== id))
  return (
    <Ctx.Provider value={{ push }}>
      {children}
      <div className="toast-stack" role="status" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`toast toast--${t.kind}`} role="alert">
            <span className="toast__icon" aria-hidden="true">{t.kind === 'success' ? '✓' : t.kind === 'error' ? '✕' : 'ℹ'}</span>
            <span className="toast__msg">{t.message}</span>
            <button className="toast__close" onClick={() => dismiss(t.id)} aria-label="Dismiss notification">✕</button>
          </div>
        ))}
      </div>
    </Ctx.Provider>
  )
}

export function useToast() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}