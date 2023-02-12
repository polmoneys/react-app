import { type ReactNode, useCallback, useState } from 'react'
import Button from '../../Buttons'
import Col from '../../Col'
import { type GroupProps } from '../Group'

interface DisclosureProps extends Omit<GroupProps, 'id'> {
  id: string
  label: ReactNode
  initialOpen?: boolean
}

const Disclosure = (props: DisclosureProps): JSX.Element => {
  const { initialOpen = false, label, id, children, ...groupProps } = props

  const [open, setStatus] = useState(initialOpen)

  const onToggle = useCallback(() => {
    setStatus(prev => !prev)
  }, [])

  return (
    <Col {...groupProps} data-disclosure="">
      <Button
        aria-controls={id}
        id={`${id}-button`}
        aria-expanded={open}
        onClick={onToggle}
      >
        {label}
      </Button>
      <div hidden={!open} id={id}>
        {children}
      </div>
    </Col>
  )
}

export default Disclosure
