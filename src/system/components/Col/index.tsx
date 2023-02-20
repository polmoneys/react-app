import Group, { type GroupProps } from '../Core/Group'

const Col = (props: GroupProps): JSX.Element => {
  const { options, ...rest } = props
  return (
    <Group
      options={{ direction: 'column', ...(options !== undefined && options) }}
      {...rest}
    />
  )
}

export default Col
