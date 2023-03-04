import { NavLink, Row } from '@/system/components'

const Subnav = (): JSX.Element => {
  return (
    <Row as="nav" gap="var(--gap-3)" size="100%">
      <NavLink to="tips">Tips</NavLink>
      <NavLink to="patterns">Patterns</NavLink>
    </Row>
  )
}

export default Subnav
