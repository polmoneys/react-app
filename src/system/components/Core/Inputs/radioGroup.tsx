import {
  cloneElement,
  type ChangeEvent,
  Children,
  type ReactElement,
} from 'react'
import { type RenderProp } from '@/system/interfaces'
import Group from '../Group'
const { map } = Children

interface RadioGroupProps<T> {
  children: ReactElement[]
  initial: T
  name: string
  className?: string
  gap?: string
  renderLabel?: RenderProp<
    { checked: boolean; radioLabel: string },
    HTMLElement
  >
  onChange: (selection: T) => void
  direction?: 'row' | 'column'
}

function RadioGroup<T extends string>(props: RadioGroupProps<T>): JSX.Element {
  const {
    children,
    initial = '',
    gap = '0',
    renderLabel,
    direction = 'row',
    className,
    name,
    onChange,
  } = props
  const onChangeRadio = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event.target.value as T)
  }

  return (
    <Group
      as="div"
      gap={gap}
      options={{ wrap: 'wrap', direction }}
      {...(className !== undefined && { className })}
    >
      {map(children, (radio: ReactElement) => {
        const { label, value } = radio.props
        const checked = initial === value

        return cloneElement(radio, {
          name,
          checked,
          value,
          onChange: onChangeRadio,
          ...(renderLabel !== undefined && { renderLabel }),
          label,
        })
      })}
    </Group>
  )
}

export default RadioGroup
