import { type ComponentProps, useEffect, type ReactNode } from 'react'
import Group from '../Group'

interface Props extends Omit<ComponentProps<'form'>, 'onChange' | 'onKeyDown'> {
  id: string
  children: ReactNode
  onChange?: (url: string) => void
}

function Form(props: Props): JSX.Element {
  const { children, id, onChange, ...formProps } = props

  useEffect(() => {
    const listener = (event: Event): void => {
      const form = event.currentTarget as HTMLFormElement
      const data = new FormData(form)
      const url = new URL(form.action, window.location.href)
      url.search = new URLSearchParams(data as any).toString()
      onChange?.(url.search)
    }

    document?.querySelector(`#${id}`)?.addEventListener('input', listener)
    return () => {
      document
        ?.querySelector(`#${id}`)
        ?.removeEventListener(`mousedown`, listener)
    }
  }, [])

  return (
    <Group as="form" id={id} {...formProps}>
      {children}
    </Group>
  )
}

export default Form
