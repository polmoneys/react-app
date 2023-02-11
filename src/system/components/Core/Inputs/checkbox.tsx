import { type ComponentProps, type ReactNode, useEffect, useMemo } from 'react'
import { FocusRing } from '@react-aria/focus'
import { classes } from '@/system/utils/theme'
import { IconCheck, IconCross, IconDash } from '../../Icons'
import Couple from '../../Couple'
import Layers from '../Layers'
import styles from './checkbox.module.css'

interface CheckboxProps extends ComponentProps<'input'> {
  label: ReactNode
  id: string
  name: string
  value: string
  isMixed?: boolean
  checked: boolean
  classNames?: {
    group?: string
    checkbox?: {
      checked?: string
      unchecked?: string
      mixed?: string
    }
  }
}

function Checkbox(props: CheckboxProps) {
  const {
    value,
    isMixed,
    onChange,
    classNames,
    label,
    id,
    name,
    checked,
    disabled = false,
    autoFocus = false,
  } = props

  const groupClassNames = [styles.group, classNames?.group]
    .filter(Boolean)
    .join(' ')

  const checkboxClassNames = useMemo(
    () =>
      classes(
        styles.checkbox,
        (isMixed ?? false) &&
          classNames?.checkbox?.mixed !== undefined &&
          classNames?.checkbox?.mixed,
        checked &&
          classNames?.checkbox?.checked !== undefined &&
          classNames?.checkbox?.checked,
        !checked &&
          classNames?.checkbox?.unchecked !== undefined &&
          classNames?.checkbox?.unchecked,
      ),
    [isMixed, checked],
  )

  useEffect(() => {
    const element = document.querySelector(`#${id}`)

    if (element !== null && isMixed !== undefined) {
      ;(element as HTMLInputElement).indeterminate = isMixed
    }
  }, [isMixed])

  return (
    <Couple as="label" htmlFor={id} className={groupClassNames}>
      <Layers as="div">
        {isMixed !== undefined && <IconDash label="mixed" size="lg" />}
        {checked && <IconCheck label="checked" size="lg" />}
        {!checked && isMixed === undefined && (
          <IconCross label="not checked" size="lg" />
        )}
        <FocusRing
          autoFocus={autoFocus}
          {...(!disabled && { focusClass: 'ring' })}
          {...(!disabled && { focusRingClass: 'ring' })}
        >
          <input
            className={checkboxClassNames}
            onChange={onChange}
            type="checkbox"
            name={name}
            id={id}
            {...(isMixed !== undefined &&
              !isMixed && {
                value,
              })}
            checked={isMixed !== undefined && !isMixed && checked}
          />
        </FocusRing>
      </Layers>
      {label}
    </Couple>
  )
}

export default Checkbox
