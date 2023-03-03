import {
  type ReactNode,
  type KeyboardEvent,
  useCallback,
  useState,
  useRef,
} from 'react'
import { useKeyboard } from 'react-aria'
import useActionOutside from '@/system/hooks/events/useActionOutside'
import Col from '../../Col'
import { type GroupProps } from '../Group'
import Button from '../Inputs/button'

interface DisclosureProps extends Omit<GroupProps, 'id'> {
  id: string
  label: ReactNode
  initialOpen?: boolean
  popper?: boolean
}

const Disclosure = (props: DisclosureProps): JSX.Element => {
  const {
    initialOpen = false,
    label,
    id,
    children,
    popper = false,
    ...groupProps
  } = props

  const [open, setStatus] = useState(initialOpen)

  const onToggle = useCallback(() => {
    setStatus(prev => !prev)
  }, [])

  const ref = useRef<HTMLDivElement>(null)

  useActionOutside(ref, () => {
    setStatus(false)
  })

  const { keyboardProps } = useKeyboard({
    onKeyDown: event => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setStatus(false)
      }
    },
  })

  return (
    <Col
      as="div"
      {...(popper && { options: { DANGEROUS: { position: 'relative' } } })}
      {...keyboardProps}
    >
      <Button
        aria-controls={id}
        id={`${id}-button`}
        aria-expanded={open}
        onClick={onToggle}
      >
        {label}
      </Button>
      <Col {...groupProps} hidden={!open} id={id}>
        <div ref={ref}>{children}</div>
      </Col>
    </Col>
  )
}

export default Disclosure
