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
    onChange,
  } = props
  const onChangeRadio = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event.target.name as T)
  }

  return (
    <Group
      as="div"
      gap={gap}
      options={{ wrap: 'wrap', direction }}
      {...(className !== undefined && { className })}
    >
      {map(children, (radio: ReactElement) => {
        const { name } = radio.props
        const checked = initial === name

        return cloneElement(radio, {
          name,
          checked,
          onChange: onChangeRadio,
          ...(renderLabel !== undefined && { renderLabel }),
          label: name,
        })
      })}
    </Group>
  )
}

export default RadioGroup
