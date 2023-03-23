import { type RenderProp } from '@/system/interfaces'
import { Fragment, useState } from 'react'
import { type Row, type Col, type CellValue } from '.'
import RowExpand from './RowExpand'

interface Props<T extends Row> {
  rowPosition: number
  columnOrder: string[]
  th: Col[]
  row: T
  columnWidths: number[]
  variant?: 'select' | 'expand'
  start?: RenderProp<{ row: T; isSelected: boolean }, HTMLElement>
  end?: RenderProp<{ row: T }, HTMLElement>
  id?: string
  selections: Set<string>
}

function BodyRow<T extends Row>(props: Props<T>): JSX.Element {
  const {
    columnOrder,
    th,
    row,
    columnWidths,
    rowPosition,
    variant,
    start,
    end,
    id,
    selections,
  } = props
  const [expanded, setExpandedStatus] = useState(false)

  const hasVariant = variant !== undefined
  const hasChildren = hasVariant && row?.children !== undefined
  const hasStart = hasVariant && variant === 'select'
  const isSelected = [...selections].includes(row.id as string)
  console.log({ selections, isSelected })

  return (
    <Fragment>
      <tr {...(id !== undefined && { id })}>
        {hasVariant && hasChildren && (
          <RowExpand
            onExpand={() => {
              setExpandedStatus(prev => !prev)
            }}
            id={`${rowPosition}-expand-button`}
            expanded={expanded}
            controls={(row.children as Row[])
              .map((child, pos) => `controls-${columnOrder.length + pos}`)
              .join(' ')}
            label={`${(row?.children as Row[])?.length ?? 0} more from`}
            labelledby={`${rowPosition}-expand-button`}
          />
        )}
        {hasStart && start?.({ row, isSelected })}
        {hasVariant && !hasStart && !hasChildren && <td></td>}

        {columnOrder.map((columnId, pos) => {
          const column = th.find(header => header.id === columnId) as Col

          const value = String(row[column.id as keyof T]).slice(0, 30)
          const { formatter = (value: CellValue) => value } = column

          const rowId = `${rowPosition}-row`
          if (pos === 0) {
            return (
              <th
                scope="row"
                data-table="sticky"
                style={{ minWidth: columnWidths[pos] }}
                key={`${pos}-${rowId}-sticky`}
                id={rowId}
              >
                {formatter(value)}
              </th>
            )
          }
          return (
            <td
              aria-labelledby={`${rowId} ${column.id}`}
              key={`${pos}-${rowId}-cell`}
              style={{ minWidth: columnWidths[pos] }}
            >
              {formatter(value)}
            </td>
          )
        })}
        {end?.({ row })}
      </tr>
      {expanded &&
        row?.children !== undefined &&
        (row?.children as Row[]).map((row, pos) => (
          <BodyRow
            row={row as T}
            id={`controls-${columnOrder.length + pos}`}
            key={pos + columnOrder.length}
            rowPosition={rowPosition}
            columnOrder={columnOrder}
            columnWidths={columnWidths}
            th={th}
            variant={variant}
            start={start as any}
            end={end as any}
            selections={selections}
          />
        ))}
    </Fragment>
  )
}

export default BodyRow
