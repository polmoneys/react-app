import {
  Link as LinkLibrary,
  type LinkProps as LinkPropsLibrary,
} from 'react-router-dom'
import { FocusRing } from '@react-aria/focus'

interface LinkProps extends LinkPropsLibrary {
  disabled?: boolean
  ring?: boolean
}

const Link = (props: LinkProps) => {
  const { className, children, disabled = false, ring = false, ...rest } = props
  return (
    <FocusRing
      {...(!disabled && ring && { focusClass: 'ring' })}
      {...(!disabled && ring && { focusRingClass: 'ring' })}
    >
      <LinkLibrary {...rest} {...(className !== undefined && { className })}>
        {children}
      </LinkLibrary>
    </FocusRing>
  )
}

export default Link
