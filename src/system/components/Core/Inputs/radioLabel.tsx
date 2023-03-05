import { type ChangeEvent, type ComponentProps, Fragment } from 'react'
import { FocusRing } from '@react-aria/focus'
import { type RenderProp } from '@/system/interfaces'
import { classes } from '@/system/utils/theme'
import { HelveticaNeue } from '../../Typography'
import Group from '../Group'
import Layers from '../Layers'
import styles from './radio.module.css'

export interface RadioProps extends ComponentProps<'input'> {
  id: string
  label?: string
  renderLabel?: RenderProp<
    { checked: boolean; radioLabel: string },
    HTMLElement
  >
  width?: string
}

/*

<Radio.Group
  name="rating"
  initial={rating}
  onChange={value => {
    dispatch(addFilter({ filter: 'rating', value }))
  }}
  gap="var(--gap-1)"
  renderLabel={({
    checked,
    radioLabel,
  }: {
    checked: boolean
    radioLabel: string
  }) => {
    const amount = matchLabelToHearts(radioLabel as Rating)
    // all
    if (amount === 0) {
      return (
        <GroteskLG
          dangerousColor={
            checked ? 'var(--color-invalid)' : 'var(--color-focus)'
          }
        >
          {radioLabel.toUpperCase()}
        </GroteskLG>
      )
    }
    return (
      <Couple as="div">
        {[...Array(amount)].map((_, pos: number) => (
          <IconHeart
            key={`${pos}-${radioLabel}`}
            label="checked"
            size="lg"
            stroke={
              checked ? 'var(--color-invalid)' : 'var(--color-focus)'
            }
          />
        ))}
      </Couple>
    )
  }}
>
  <Radio.Label
    label="all"
    name="all"
    value="all"
    id="radio-rating-all"
    width="calc(25% - var(--gap-1)"
  />
  <Radio.Label
    label="top"
    name="top"
    value="top"
    id="radio-rating-top"
    width="calc(50% - var(--gap-1)"
  />
  <Radio.Label
    label="good"
    name="good"
    value="good"
    id="radio-rating-good"
    width="calc(25% - var(--gap-1)"
  />
  <Radio.Label
    label="bad"
    name="bad"
    value="bad"
    id="radio-bad"
    width="calc(25% - var(--gap-1)"
  />
  <Radio.Label
    label="excelent"
    name="excelent"
    value="excelent"
    id="radio-excelent"
    width="calc(75% - var(--gap-1)"
  />
</Radio.Group> 

*/
function RadioLabel(props?: RadioProps): JSX.Element {
  if (props === undefined) return <Fragment />
  const {
    onChange,
    id,
    renderLabel,
    label,
    name,
    value,
    width,
    checked = false,
    disabled = false,
    autoFocus = false,
  } = props

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>): void =>
    onChange?.(event)

  const inputLabel =
    renderLabel === undefined ? (
      <HelveticaNeue>{label}</HelveticaNeue>
    ) : (
      renderLabel?.({
        checked: props?.checked ?? false,
        radioLabel: props.label ?? '',
      })
    )

  const groupClassnames = classes(styles.radio, checked && styles.radioChecked)

  return (
    <Group as="div" className={groupClassnames} size={width}>
      <label htmlFor={id} className={styles.label}>
        <Layers stretch as="div">
          <div>{inputLabel}</div>
          <FocusRing
            autoFocus={autoFocus}
            {...(!disabled && { focusClass: 'ring' })}
            {...(!disabled && { focusRingClass: 'ring' })}
          >
            <input
              type="radio"
              id={id}
              name={name}
              value={value}
              checked={checked}
              onChange={onRadioChange}
            />
          </FocusRing>
        </Layers>
      </label>
    </Group>
  )
}

export default RadioLabel
