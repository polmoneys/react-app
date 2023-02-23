import Group, { type GroupProps } from '../Core/Group'

interface CoupleProps extends GroupProps {}
const Couple = (props: CoupleProps): JSX.Element => {
  const { gap = 'var(--gap-2)', ...rest } = props
  return (
    <Group
      {...rest}
      gap={gap}
      options={{ wrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}
    />
  )
}

export default Couple
