import { type ComponentProps, type ReactNode } from 'react'
import { classes } from '@/system/utils/theme'
import './index.css'

interface ListProps extends ComponentProps<'ul'> {
  children: string | ReactNode
  label: string
  zebra?: boolean
}

interface ListItemProps extends ComponentProps<'li'> {
  children: string | ReactNode
  description?: string
  start?: ReactNode
  end?: ReactNode
}

const List = (props: ListProps): JSX.Element => {
  const { children, className, label, zebra = true, ...rest } = props

  const classNames = classes(className, 'group', 'list', zebra && 'zebra')
  return (
    <ul role="list" className={classNames} aria-label={label} {...rest}>
      {children}
    </ul>
  )
}

List.Item = (props: ListItemProps): JSX.Element => {
  const { className, children, description, start, end } = props
  const slots = `${start !== undefined ? ':start' : ''}${
    end !== undefined ? ':end' : ''
  }`

  const classNamesGroup = classes(
    className,
    'item',
    `list:item${start !== undefined || end !== undefined ? slots : ''}`,
  )
  return (
    <li className={classNamesGroup}>
      {start !== undefined && <div className="start">{start}</div>}
      <div>
        {children}
        {description !== undefined && <div>{description}</div>}
      </div>
      {end !== undefined && <div className="end">{end}</div>}
    </li>
  )
}

List.Divider = (props: Pick<ListItemProps, 'children'>): JSX.Element => {
  return (
    <li className="item">
      <div className="list:divider">
        {props.children !== undefined && props.children}
      </div>
    </li>
  )
}

export default List
