import { Link, Row } from '@/system/components'

const Subnav = (): JSX.Element => {
  return (
    <nav>
      <Row as="div" gap="var(--gap-3)" size="100%">
        <Link to="css">CSS</Link>
        <Link to="ui">UI</Link>
      </Row>
    </nav>
  )
}

export default Subnav
