import {
  type SortDirection,
  type Sorter as SorterInterface,
} from '@/features/stories/interfaces/Pager'
import { type Dictionary } from '@/system/interfaces'
import { type ComponentProps } from 'react'
import Sorter from './Sorter'
import './index.css'

interface Item {
  label: string
  id: string
  [key: string]: any
}

interface Props<T extends Item> extends ComponentProps<'table'> {
  label: string
  th: Item[]
  tr: T[]
  sort: SorterInterface
  onSort: (id: string, dir: SortDirection) => void
}

type IndexType<T extends Item> = {
  [K in keyof T]: K extends 'id' ? string : never
}

function Table<T extends Item>(props: Props<T>): JSX.Element {
  const { label, th, tr, sort, onSort } = props

  type ColumnHeaderId = keyof IndexType<T>[keyof IndexType<T>]

  return (
    <div style={{ width: '100%', overflow: 'scroll' }}>
      <table>
        <caption className="visually-hidden">{label}</caption>
        <thead>
          <tr>
            {th.map((head, pos) => {
              const isSorting = sort.id === head.id

              let ariaSortProps: Dictionary = {}
              if (sort !== undefined) {
                const { direction } = sort
                if (isSorting) {
                  ariaSortProps = {
                    'aria-sort': direction,
                  }
                }
              }

              if (pos === 0) {
                return (
                  <th
                    key={head.label.slice(0, 3)}
                    scope="col"
                    data-table="pin"
                    {...ariaSortProps}
                    onClick={() => {
                      onSort(
                        head.id,
                        sort.direction === 'ascending'
                          ? 'descending'
                          : 'ascending',
                      )
                    }}
                  >
                    {head.label}
                    <Sorter
                      isSorting={isSorting}
                      isAscending={sort.direction === 'ascending'}
                    />
                  </th>
                )
              }
              return (
                <th
                  scope="col"
                  key={head.label.slice(0, 3)}
                  {...ariaSortProps}
                  onClick={() => {
                    onSort(
                      head.id,
                      sort.direction === 'ascending'
                        ? 'descending'
                        : 'ascending',
                    )
                  }}
                >
                  {head.label}
                  <Sorter
                    isSorting={isSorting}
                    isAscending={sort.direction === 'ascending'}
                  />
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {tr?.map((row, pos) => {
            return (
              <tr key={`${pos}-body-table-row`}>
                {th.map((th, pos) => {
                  // const columnHeaderID = th.id as any
                  // // @ts-expect-error grrr
                  // const v = row[columnHeaderID].slice(0, 30) as string
                  const columnHeaderID = th.id as keyof T
                  const v = row[columnHeaderID].slice(0, 30) as string

                  if (pos === 0) {
                    return (
                      <th scope="row" data-table="sticky" key={`${pos}`}>
                        {v}
                      </th>
                    )
                  }
                  return (
                    <td scope="col" key={`${pos}`}>
                      {v}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
