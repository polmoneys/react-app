import { Col, Disclosure, HelveticaNeue, Row } from '@/system/components'
import Filters from '../components/Filters'
import useLanding from '../hooks/useLanding'
import Launch from '../components/Launch'
import Crews from '../components/Crews'

const Archive = (): JSX.Element => {
  const [
    { data: crew, isError: isErrorCrew, isLoading: isLoadingCrew },
    { data: latest, isError: isErrorLatest, isLoading: isLoadingLatest },
  ] = useLanding()

  return (
    <Col as="article" gap="var(--gap-3)">
      <Row
        as="div"
        options={{
          justifyContent: 'flex-end',
        }}
      >
        <Disclosure
          popper
          as="div"
          id="archive-filters"
          label={<HelveticaNeue as="span"> Filters</HelveticaNeue>}
          options={{
            DANGEROUS: {
              backgroundColor: 'var(--gray-800)',
              padding: 'var(--gap-3)',
            },
          }}
          className="filters "
        >
          <Filters />
        </Disclosure>
      </Row>
      <div className="archive-grid">
        <Launch launch={latest} />
        <Crews crew={crew} />
      </div>
    </Col>
  )
}

export default Archive
