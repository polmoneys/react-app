import { NavLink, Row } from '@/system/components'

const Sidenav = (): JSX.Element => {
  return (
    <Row as="nav" className="mr:auto">
      <NavLink to="meals">Meals</NavLink>
    </Row>
  )
}

export default Sidenav
