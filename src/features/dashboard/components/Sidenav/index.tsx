import { NavLink, Row } from '@/system/components'

const Sidenav = (): JSX.Element => {
  return (
    <Row as="nav" gap="0" size="100%">
      <NavLink to="meals">Meals</NavLink>
    </Row>
  )
}

export default Sidenav
