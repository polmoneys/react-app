import { type ElementType, useMemo, type ReactNode } from 'react'
import styles from './index.module.css'

/*

const slotsPortrait = [
  {
    id: "0",
    label: "",
    children: "Sidebar",

    x: [1, 7],
    y: [1, 2]
  },
  {
    id: "3",
    label: "",
    children: "v2",

    x: [1, 4],
    y: [4, 7]
  },
  {
    id: "1",
    label: "",
    children: "Grid/Flex",

    x: [1, 7],
    y: [2, 4]
  },
  {
    id: "2",
    label: "",
    children: "Slots",
    x: [4, 7],
    y: [4, 7]
  }
];
const slotsLandscape = [
  {
    id: "0",
    label: "",
    children: <div className="aa">Sidebar</div>,
    x: [1, 3],
    y: [1, 5]
  },
  {
    id: "3",
    label: "",
    children: <div className="bb">v2</div>,

    x: [1, 3],
    y: [5, 7]
  },
  {
    id: "1",
    label: "",
    children: <div className="cc">Grid/xxx</div>,

    x: [3, 7],
    y: [1, 4]
  },
  {
    id: "2",
    label: "",
    children: <div className="dd">Slots</div>,
    x: [3, 7],
    y: [4, 7]
  }
];

export default function App() {
  const divRef = useRef(null);
  const parentSize = useResizeObserver(divRef);
  const isPortrait = useMemo(() => {
    // console.log(parentSize);
    if (
      parentSize === null ||
      parentSize === undefined ||
      parentSize.width === undefined
    )
      return false;
    if (parentSize.width > 522) return false;
    return true;
  }, [parentSize]);

  return (
    <div className="App">
      <div ref={divRef} className="hh">
        <Print
          debug
          items={isPortrait ? slotsPortrait : slotsLandscape}
          x={6}
          y={6}
          minY="10vh"
        />
      </div>
    </div>
  );
}
*/
export interface MondrianProps {
  gap?: string
  items: MondrianItemsProps
  /** 🚨 Divisions across X axis */
  x: number
  /** 🚨 Divisions across Y axis */
  y: number
  /** Assign min height to each slot item */
  minY?: string
  debug?: boolean
  as?:
    | 'section'
    | 'article'
    | 'nav'
    | 'aside'
    | 'header'
    | 'footer'
    | 'div'
    | 'main'
  className?: string
  id?: string
}

export interface MondrianItemProps {
  id: string
  /** grid-template-columns [start,end] */
  x: Record<number, number>
  /** grid-template-rows [start,end] */
  y: Record<number, number>
  as?: 'div' | 'article'
  /** grid content alignment , defaults to stretch */
  placement?: 'end' | 'start' | 'stretch' | 'center'
  children: ReactNode
}
export interface MondrianItemsProps extends Array<MondrianItemProps> {}

const Mondrian = (props: MondrianProps): JSX.Element => {
  const {
    as,
    className,
    items,
    gap = '0',
    x,
    y,
    id,
    minY = '10em',
    debug = false,
  } = props

  const gridStyles = useMemo(() => {
    return {
      gridTemplateColumns: `repeat(${x}, minmax(0, 1fr))`,
      gridTemplateRows: `repeat(${y}, minmax(0, ${minY}))`,
      gap,
    }
  }, [x, y, gap, minY])

  const gridItems = useMemo(() => {
    return items?.map(item => {
      const { id, x, y, as, children, placement } = item
      const itemStyles = {
        gridRow: `${y[0]}/ ${y[1]} `,
        gridColumn: `${x[0]}/ ${x[1]} `,
        alignContent: placement === undefined ? 'stretch' : placement,
        border: debug ? '1px solid pink' : 'none',
      }
      const Tag = as ?? ('div' as ElementType)

      return (
        <Tag style={itemStyles} key={id} className={styles.item}>
          {children}
        </Tag>
      )
    })
  }, [debug, items])

  const groupClassNames = [styles.group, className].filter(Boolean).join(' ')
  const Tag = as ?? ('div' as ElementType)

  return (
    <Tag
      {...(id !== undefined && { id })}
      className={groupClassNames}
      style={{ ...gridStyles }}
    >
      {gridItems}
    </Tag>
  )
}

export default Mondrian
