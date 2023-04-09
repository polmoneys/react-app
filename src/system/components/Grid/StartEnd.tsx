import { classes } from '@/system/utils/theme'
import {
  type ReactNode,
  Children,
  cloneElement,
  useRef,
  useEffect,
  useState,
  isValidElement,
} from 'react'

/*

const Li = (props: Props) => (
  <li
    className={[
      props.column === "start" && "first",
      props.column === "end" && "last"
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {props.children}
  </li>
);

<StartEnd>
    {[...Array(10)].map((_, pos: number) => (
        <Li key={pos}>{pos}</Li>
    ))}
</StartEnd>

*/

interface StartEndProps {
  children: ReactNode
  size?: string
  className?: string
}

type ColumnType = 'start' | 'end' | null

interface CollectionProps {
  column: ColumnType
}

const StartEnd = (props: StartEndProps): JSX.Element => {
  const { children, size = '200px', className } = props
  const ulRef = useRef<HTMLUListElement>(null)
  const [itemsPerRow, setItemsPerRow] = useState<number>(0)

  useEffect(() => {
    const updateItemsPerRow = (): void => {
      if (ulRef.current != null) {
        const ulWidth = ulRef.current.clientWidth
        const itemWidth = parseInt(size, 10)
        const itemsPerRow = Math.floor(ulWidth / itemWidth)
        setItemsPerRow(itemsPerRow)
      }
    }

    const resizeObserver = new ResizeObserver(updateItemsPerRow)

    if (ulRef.current != null) {
      resizeObserver.observe(ulRef.current)
    }

    updateItemsPerRow()

    return () => {
      if (ulRef.current != null) {
        resizeObserver.unobserve(ulRef.current)
      }
    }
  }, [size])

  return (
    <ul
      ref={ulRef}
      className={classes(className)}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%,${size}), 1fr))`,
      }}
    >
      {Children.map(children, (child, index) => {
        if (isValidElement(child) && itemsPerRow > 0) {
          const isStartRow = index % itemsPerRow === 0
          const isEndRow =
            (index + 1) % itemsPerRow === 0 ||
            index === Children.count(children) - 1
          const column: ColumnType =
            itemsPerRow === 1
              ? null
              : isStartRow
              ? 'start'
              : isEndRow
              ? 'end'
              : null

          const collection: CollectionProps = {
            column,
          }
          return cloneElement(child, collection)
        }
        return child
      })}
    </ul>
  )
}

export default StartEnd
