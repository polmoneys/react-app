import './index.css'

interface Props {
  pre: string
  label: string
  description: string
  id: string
}

const Pre = (props: Props): JSX.Element => {
  const { pre, label, description, id } = props

  return (
    <figure data-pre="root">
      <pre role="img" aria-label={label}>
        {pre}
      </pre>
      <figcaption data-pre="caption" id={`caption-${id}`}>
        {description}
      </figcaption>
    </figure>
  )
}

export default Pre
