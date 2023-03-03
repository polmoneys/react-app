import { ButtonIcon } from '.'
import { IconCross, IconPlus } from '../Icons'
import Row from '../Row'
import { HelveticaNeue } from '../Typography'
import styles from '../Core/inputs/button.module.css'
import { classes } from '@/system/utils/theme'

interface Props {
  name: string
  dispatchName: any
  isSelected: boolean
}

const Chip = (props: Props) => {
  const { isSelected, name, dispatchName } = props
  return (
    <Row
      as="div"
      options={{ alignItems: 'center' }}
      className={classes(styles.chip, isSelected && styles.selected)}
      data-selected={isSelected}
    >
      <ButtonIcon onClick={() => dispatchName({ type: 'remove', name })}>
        <IconCross label="Remove" />
      </ButtonIcon>
      <HelveticaNeue>{name}</HelveticaNeue>
      <ButtonIcon onClick={() => dispatchName({ type: 'add', name })}>
        <IconPlus label="Add" />
      </ButtonIcon>
    </Row>
  )
}

export default Chip
