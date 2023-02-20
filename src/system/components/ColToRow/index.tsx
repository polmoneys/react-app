import { classes } from '@/system/utils/theme'
import Group, { type GroupProps } from '../Core/Group'

const ColToRow = (props: GroupProps): JSX.Element => {
  const { className, ...rest } = props
  return <Group {...rest} className={classes('col:row', className)} />
}

export default ColToRow
