import Link from '@/system/components/Link'
import Row from '@/system/components/Row'

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
