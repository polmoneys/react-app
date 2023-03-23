import { type ComponentProps, useState, type MouseEvent, useMemo } from 'react'
import { type RenderProp } from '@/system/interfaces'
import {
  type SortDirection,
  type Sorter as SorterInterface,
} from '@/features/stories/interfaces/Pager'
import { IconHandle } from '../../Icons'
import HeadCell from './Cell'
import Sorter from './Sorter'
import BodyRow from './Row'
import Resize from './Resize'
import CellStart from './CellStart'
import CellEnd from './CellEnd'
import './index.css'

/*
  credits => https://adrianroselli.com/2019/05/uniquely-labeling-fields-in-a-table.html
*/

export type CellValue = string | number | boolean

export interface Row extends Record<string, CellValue | Row[]> {}

export interface RowExpandable extends Record<string, CellValue | unknown[]> {}

export interface Col {
  label: string
  id: string
  formatter?: (value: CellValue) => CellValue | JSX.Element
}

interface Props<T extends Row> extends ComponentProps<'table'> {
  label: string
  th: Col[]
  tr: T[]
  variant?: 'select' | 'expand'
  start?: RenderProp<{ row: T; isSelected: boolean }, HTMLElement>
  end?: RenderProp<{ row: T }, HTMLElement>
  sort: SorterInterface
  onSort: (id: string, dir: SortDirection) => void
  enableReorder?: boolean
  enableResize?: boolean
  firstColumnWidth?: number
  defaultColumnWidth?: number
  maxResizeWidth?: number
  selections?: Set<string>
}

function Table<T extends Row>(props: Props<T>): JSX.Element {
  const {
    label,
    th,
    tr,
    sort,
    onSort,
    enableReorder = false,
    enableResize = false,
    firstColumnWidth = 340,
    defaultColumnWidth = 200,
    maxResizeWidth = 440,
    variant,
    start,
    end,
    selections = new Set(),
  } = props

  const [columnOrder, setColumnOrder] = useState<string[]>(
    th.map(head => head.id),
  )
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const onDragStart = (pos: number): void => {
    if (enableReorder) {
      setDraggedIndex(pos)
    }
  }

  const onDragEnter = (pos: number): void => {
    if (enableReorder) {
      setHoveredIndex(pos)
    }
  }
  const initialWidths = useMemo(
    // todo: filter first {} from th
    () => [firstColumnWidth, ...th.map(() => defaultColumnWidth)],
    [],
  )

  const [columnWidths, setWidths] = useState<number[]>(initialWidths)

  const onDragEnd = (): void => {
    if (enableReorder) {
      if (
        draggedIndex !== null &&
        hoveredIndex !== null &&
        draggedIndex !== hoveredIndex
      ) {
        const newColumnOrder = [...columnOrder]
        newColumnOrder.splice(draggedIndex, 1)
        newColumnOrder.splice(hoveredIndex, 0, columnOrder[draggedIndex])
        setColumnOrder(newColumnOrder)
        setWidths(initialWidths)
      }
      setDraggedIndex(null)
      setHoveredIndex(null)
    }
  }

  const onResize = (index: number, event: MouseEvent): void => {
    const initialX = event.clientX
    const initialWidth = columnWidths[index]

    const onMouseMove = (moveEvent: MouseEvent): void => {
      const newWidth = Math.min(
        initialWidth + moveEvent.clientX - initialX,
        maxResizeWidth,
      )

      setWidths(prevWidths => {
        const newWidths = [...prevWidths]
        newWidths[index] = newWidth
        return newWidths
      })
    }

    const onMouseUp = (): void => {
      window.removeEventListener('mousemove', onMouseMove as any)
      window.removeEventListener('mouseup', onMouseUp)
    }

    window.addEventListener('mousemove', onMouseMove as any)
    window.addEventListener('mouseup', onMouseUp)
  }

  const tableCaption = useMemo(() => `${label.slice(0, 20)}-caption`, [])

  return (
    <div
      data-table=""
      style={{
        // todo: while testing, should be 100%
        height: '300px',
      }}
      role="region"
      aria-labelledby={tableCaption}
      tabIndex={0}
    >
      <table>
        <caption id={tableCaption} className="visually-hidden">
          {label}
        </caption>
        <thead>
          <tr>
            <CellStart variant={variant} />

            {columnOrder.map((columnId, pos) => {
              const head = th.find(head => head.id === columnId) as Col
              const isFirstCell = pos === 0
              const isSorting = sort.id === head.id
              const className =
                draggedIndex === pos
                  ? 'dragged'
                  : hoveredIndex === pos
                  ? 'hovered'
                  : ''
              const nextSortDirection =
                sort.direction === 'ascending' ? 'descending' : 'ascending'
              return (
                <HeadCell
                  key={columnId}
                  id={columnId}
                  sort={sort}
                  onSort={() => {
                    onSort(head.id, nextSortDirection)
                  }}
                  width={columnWidths[pos]}
                  isFirstCell={isFirstCell}
                  isSorting={isSorting}
                  className={className}
                >
                  {enableReorder && !isFirstCell && (
                    <span
                      className="handle"
                      draggable
                      tabIndex={0}
                      aria-roledescription={`Draggable column header for ${head.label}`}
                      onDragStart={() => {
                        onDragStart(pos)
                      }}
                      onDragEnter={() => {
                        onDragEnter(pos)
                      }}
                      onDragEnd={onDragEnd}
                    >
                      <IconHandle label="" />
                      {head.label}
                    </span>
                  )}
                  {(!enableReorder || isFirstCell) && head.label}
                  <Sorter
                    isSorting={isSorting}
                    isAscending={sort.direction === 'ascending'}
                  />
                  <Resize
                    enabled={enableResize}
                    label={head.label}
                    onResize={event => {
                      onResize(pos, event)
                    }}
                  />
                </HeadCell>
              )
            })}
            <CellEnd end={end} />
          </tr>
        </thead>
        <tbody>
          {tr?.map((row, pos) => {
            return (
              <BodyRow
                columnOrder={columnOrder}
                key={`${pos}-body-table-row`}
                rowPosition={pos}
                th={th}
                row={row}
                columnWidths={columnWidths}
                variant={variant}
                start={start}
                end={end}
                selections={selections}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table

/*
  Possible perf improvements:

  const dragStartIndex = useRef<number>(-1);
  const draggedOverIndex = useRef<number>(-1);
  const onDragStart = (index: number) => {
    dragStartIndex.current = index;
  };

  const onDragEnter = (index: number) => {
    draggedOverIndex.current = index;
  };

  const onDragEnd = () => {
    if (
      dragStartIndex.current !== -1 &&
      draggedOverIndex.current !== -1 &&
      dragStartIndex.current !== draggedOverIndex.current
    ) {
      const newColumnOrder = [...columnOrder];
      newColumnOrder.splice(
        draggedOverIndex.current,
        0,
        newColumnOrder.splice(dragStartIndex.current, 1)[0]
      );
      setColumnOrder(newColumnOrder);
    }
    dragStartIndex.current = -1;
    draggedOverIndex.current = -1;
  };
*/
