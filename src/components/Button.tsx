import { forwardRef, type ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = 'primary', size = 'md', loading = false, fullWidth = false, className = '', children, disabled, ...rest },
  ref,
) {
  const cls = ['btn', `btn--${variant}`, `btn--${size}`, fullWidth ? 'btn--full' : '', className].filter(Boolean).join(' ')
  return (
    <button ref={ref} className={cls} disabled={disabled || loading} {...rest}>
      {loading && <span className="btn__spinner" aria-hidden="true" />}
      <span className="btn__label">{children}</span>
    </button>
  )
})

export default Button