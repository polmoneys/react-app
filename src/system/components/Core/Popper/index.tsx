import { type ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { type RenderProp } from '@/system/interfaces'
import {
  elementIsOutsideViewport,
  findMostVisiblePosition,
  type Positions,
} from './utils'
import './index.css'
import useActionOutside from '@/system/hooks/interactive/useActionOutside'
import { useKeyboard } from 'react-aria'

interface Props {
  children: RenderProp<{ toggle: () => void }, HTMLElement>
  position: Positions
  content: ReactNode
}

const Popper = (props: Props): JSX.Element => {
  const { children, position = 'center', content } = props
  const ref = useRef<HTMLDivElement>(null)
  const [shouldShow, setShouldShow] = useState(false)
  const [overridePosition, setOverridePosition] = useState<Positions | ''>('')
  const toggle: () => void = () => {
    setShouldShow(val => !val)
  }
  useActionOutside(ref, () => {
    setShouldShow(false)
  })
  const { keyboardProps } = useKeyboard({
    onKeyDown: event => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setShouldShow(false)
      }
    },
  })

  useLayoutEffect(() => {
    if (ref.current == null) return
    if (!elementIsOutsideViewport(ref.current)) return
    const position = findMostVisiblePosition(ref.current)
    setOverridePosition(position)
  })

  const positionClassName =
    overridePosition.trim() !== '' ? overridePosition : position

  return (
    <div data-popper="root" {...keyboardProps}>
      {shouldShow && (
        <div ref={ref} data-popper="content" className={positionClassName}>
          {content}
        </div>
      )}

      {children({ toggle })}
    </div>
  )
}

export default Popper
