import {
  Fragment,
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { type RenderProp } from '@/system/interfaces'
import {
  elementIsOutsideViewport,
  findMostVisiblePosition,
  type Positions,
} from './utils'
import './index.css'
import useActionOutside from '@/system/hooks/useActionOutside'

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

  useLayoutEffect(() => {
    if (ref.current == null) return
    if (!elementIsOutsideViewport(ref.current)) return
    const position = findMostVisiblePosition(ref.current)
    setOverridePosition(position)
  })

  const positionClassName =
    overridePosition.trim() !== '' ? overridePosition : position

  return (
    <Fragment>
      <div data-popper="root">
        {shouldShow && (
          <div ref={ref} data-popper="content" className={positionClassName}>
            {content}
          </div>
        )}

        {children({ toggle })}
      </div>
    </Fragment>
  )
}

export default Popper
