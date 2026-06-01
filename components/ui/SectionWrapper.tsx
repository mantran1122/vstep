import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function SectionWrapper({ children, className = '' }: Props) {
  return (
    <div style={{ margin: '0 auto' }} className={`max-w-[1440px] w-full px-6 ${className}`}>
      {children}
    </div>
  )
}
