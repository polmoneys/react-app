import { NavLink, Row } from '@/system/components'

const SubnavTips = (): JSX.Element => {
  return (
    <Row as="nav" gap="var(--gap-3)" size="100%">
      <NavLink to={'buttons'}>Buttons</NavLink>
      <NavLink to={'fonts'}>Fonts</NavLink>
      <NavLink to={'forms'}>Forms</NavLink>
    </Row>
  )
}

export default SubnavTips
