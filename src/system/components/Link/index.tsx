import {
  Link as LinkLibrary,
  NavLink as NavLinkLibrary,
  type LinkProps as LinkPropsLibrary,
} from 'react-router-dom'
import { FocusRing } from '@react-aria/focus'

interface LinkProps extends LinkPropsLibrary {
  disabled?: boolean
  ring?: boolean
}

const Link = (props: LinkProps): JSX.Element => {
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

export const NavLink = (props: LinkProps): JSX.Element => {
  const { className, children, disabled = false, ring = false, ...rest } = props
  return (
    <FocusRing
      {...(!disabled && ring && { focusClass: 'ring' })}
      {...(!disabled && ring && { focusRingClass: 'ring' })}
    >
      <NavLinkLibrary {...rest} {...(className !== undefined && { className })}>
        {children}
      </NavLinkLibrary>
    </FocusRing>
  )
}

export default Link
