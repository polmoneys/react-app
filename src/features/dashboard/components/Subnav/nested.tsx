import { Link, Row } from '@/system/components'

const SubnavNested = (): JSX.Element => {
  return (
    <nav>
      <Row as="div" gap="var(--gap-3)" size="100%">
        <Link to={'11111'}>TIP 11111</Link>
        <Link to={'2222'}>TIP 2222</Link>
        <Link to={'3333'}>TIP 3333</Link>
        <Link to={'4444'}>TIP 4444</Link>
      </Row>
    </nav>
  )
}

export default SubnavNested
