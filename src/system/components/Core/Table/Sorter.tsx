import { Fragment } from 'react'
import { IconCaretDown, IconCaretUp } from '../../Icons'

interface Props {
  isSorting: boolean
  isAscending: boolean
}

function Sorter(props: Props): JSX.Element {
  const { isAscending, isSorting } = props
  if (!isSorting) return <Fragment />
  return (
    <Fragment>
      {isAscending ? (
        <IconCaretUp label="sorting ascending" data-table-sort="ascending" />
      ) : (
        <IconCaretDown
          label="sorting descending"
          data-table-sort="descending"
        />
      )}
    </Fragment>
  )
}

export default Sorter
