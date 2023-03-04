import { type ReactNode } from 'react'
import { InView } from 'react-intersection-observer'

interface Props {
  children: ReactNode
  className?: string
  options?: {
    threshold?: number
    rootMargin?: string
    triggerOnce?: boolean
  }
  onChange?: (on: boolean) => void
  as?: HTMLTags
}

const HTMLtag = ['header', 'footer', 'h1', 'h2', 'h3', 'div'] as const
type HTMLTags = (typeof HTMLtag)[number]

function Fence(props: Props): JSX.Element {
  const { as = 'div', children, options, onChange, className } = props

  return (
    <InView
      as={as}
      {...(options !== undefined && {
        ...options,
      })}
      onChange={(inView, entry) => onChange?.(inView)}
      {...(className !== undefined && { className })}
    >
      {children}
    </InView>
  )
}

export default Fence
