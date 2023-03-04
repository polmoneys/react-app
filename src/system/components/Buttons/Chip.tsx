import { type Dispatch } from 'react'
import { classes } from '@/system/utils/theme'
import styles from './index.module.css'
import { ButtonIconError, ButtonIconSuccess } from '.'
import Row from '../Row'
import { IconCross, IconPlus } from '../Icons'
import { HelveticaNeue, HelveticaNeueS } from '../Typography'

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
      gap="0"
      options={{ alignItems: 'center' }}
      className={classes(styles.chip, isSelected && styles.selected)}
      data-selected={isSelected}
    >
      <HelveticaNeueS>{name}</HelveticaNeueS>
      <ButtonIconSuccess
        onClick={() => {
          dispatch({ type: 'remove', name })
        }}
      >
        <IconCross label="Remove" />
      </ButtonIconSuccess>
      <ButtonIconError
        onClick={() => {
          dispatch({ type: 'add', name })
        }}
      >
        <IconPlus label="Add" />
      </ButtonIconError>
    </Row>
  )
}

export default Chip
