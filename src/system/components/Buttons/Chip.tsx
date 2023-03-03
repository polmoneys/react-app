import { type Dispatch } from 'react'
import { classes } from '@/system/utils/theme'
import { ButtonIcon } from '.'
import { IconCross, IconPlus } from '../Icons'
import Row from '../Row'
import { HelveticaNeue } from '../Typography'
import styles from '../Core/inputs/button.module.css'

interface Props {
  name: string
  dispatch: Dispatch<any>
  isSelected: boolean
}

const Chip = (props: Props): JSX.Element => {
  const { isSelected, name, dispatch } = props
  return (
    <Row
      as="div"
      options={{ alignItems: 'center' }}
      className={classes(styles.chip, isSelected && styles.selected)}
      data-selected={isSelected}
    >
      <ButtonIcon
        onClick={() => {
          dispatch({ type: 'remove', name })
        }}
      >
        <IconCross label="Remove" />
      </ButtonIcon>
      <HelveticaNeue>{name}</HelveticaNeue>
      <ButtonIcon
        onClick={() => {
          dispatch({ type: 'add', name })
        }}
      >
        <IconPlus label="Add" />
      </ButtonIcon>
    </Row>
  )
}

export default Chip
