import type { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  interactive?: boolean
}

export default function Card({ children, interactive = false, className = '', ...rest }: Props) {
  return <div className={`card ${interactive ? 'card--interactive' : ''} ${className}`} {...rest}>{children}</div>
}