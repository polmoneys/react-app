import { type ReactNode } from 'react'
import './index.css'

interface ViewProps {
  children: ReactNode
  className?: string
}

const View = ({ children, className }: ViewProps): JSX.Element => (
  <section data-view="root" {...(className !== undefined && { className })}>
    {children}
  </section>
)

View.Full = ({ children, className }: ViewProps) => (
  <div data-view="full" {...(className !== undefined && { className })}>
    {children}
  </div>
)

View.Feature = ({ children, className }: ViewProps) => (
  <div data-view="feature" {...(className !== undefined && { className })}>
    {children}
  </div>
)

View.Popout = ({ children, className }: ViewProps) => (
  <div data-view="popout" {...(className !== undefined && { className })}>
    {children}
  </div>
)

export default View
