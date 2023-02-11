import { cloneElement, ChangeEvent, Children, type ReactElement } from 'react'
import { RenderProp } from '@/system/interfaces'
import Group from '../Group'
const { map } = Children

interface RadioGroupProps {
  name: string
  children: ReactElement[]
  className?: string
  gap?: string

  direction?: 'row' | 'column'
}

function GroupFieldset(props: RadioGroupProps) {
  const { children, gap = '0', direction = 'row', className, name } = props

  return (
    <Group
      as="fieldset"
      gap={gap}
      options={{ wrap: 'wrap', direction }}
      {...(className !== undefined && { className })}
    >
      {map(children, (radio: ReactElement) => {
        const { value, checked, label } = radio.props

        return cloneElement(radio, {
          name,
          value,
          checked,
          label,
        })
      })}
    </Group>
  )
}

export default GroupFieldset
