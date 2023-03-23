import { Fragment } from 'react'

interface Props {
  onResize: (event: React.MouseEvent) => void
  enabled: boolean
  label: string
}

const Resize = (props: Props): JSX.Element => {
  const { enabled, label, onResize } = props

  if (!enabled) return <Fragment />
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: -4,
        width: 8,
        cursor: 'col-resize',
      }}
      aria-label={`Resize column ${label}`}
      onMouseDown={event => {
        onResize(event)
      }}
    />
  )
}

export default Resize
