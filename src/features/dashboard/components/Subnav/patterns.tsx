import { NavLink, Row } from '@/system/components'

const SubnavPatterns = (): JSX.Element => {
  return (
    <Row as="nav" gap="var(--gap-3)" size="100%">
      <NavLink to={'gradients'}>Gradients</NavLink>
      <NavLink to={'couple'}>Couple</NavLink>
      <NavLink to={'auto'}>Auto</NavLink>
    </Row>
  )
}

export default SubnavPatterns
