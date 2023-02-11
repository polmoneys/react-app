import { useMemo } from 'react'
import Font, { type FontProps, type FontSize } from '.'
import { type Fonts } from '../../Typography'

export const Compose = (composeClassName: string) => (props: FontProps) => {
  const { className, ...rest } = props
  const css = useMemo(
    () => [props.className, composeClassName].filter(Boolean).join(' '),
    [props.className, composeClassName],
  )
  return <Font {...rest} className={css} />
}
export const ComposeSize =
  (Base: typeof Font, size: FontSize) => (props: FontProps) =>
    <Base {...props} size={size} />

export const Lorem = 'Lorem ipsum dolor sit amet.'
export const LoremMD =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt gloria est tu.'
export const LoremXL = LoremMD.repeat(5)

/*  
  Usage: 
  const WithTime = addTime(HelveticaNeueBoldS);
*/
export const addTime = (Element: Fonts) => (props: FontProps) => {
  const { children, date = new Date(), ...rest } = props
  return (
    <Element {...rest}>
      {children}
      {new Intl.DateTimeFormat().format(date)}
    </Element>
  )
}
