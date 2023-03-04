import { HelveticaNeue, Shape, Row, Grid, View } from '@/system/components'

const PatternMarginAuto = (): JSX.Element => {
  return (
    <View.Full>
      <HelveticaNeue>
        Margin left/right instead of justify content
      </HelveticaNeue>
      <Grid as="div" className="gap:xl" size="md">
        <div style={{ background: 'var(--gray-600)' }}>
          <Row
            as="div"
            className="px:lg"
            options={{
              alignItems: 'center',
              DANGEROUS: { minHeight: '20vh' },
            }}
          >
            <Shape.Triangle className="mr:auto" />
            <Shape.Square />
            <Shape.Circle />
            <Shape sides={5} />
          </Row>
        </div>
        <div style={{ background: 'var(--gray-600)' }}>
          <Row
            as="div"
            className="px:lg"
            options={{
              alignItems: 'center',
              DANGEROUS: { minHeight: '20vh' },
            }}
          >
            <Shape.Triangle />
            <Shape.Square className="mr:auto" />
            <Shape.Circle />
            <Shape sides={5} />
          </Row>
        </div>
        <div style={{ background: 'var(--gray-600)' }}>
          <Row
            as="div"
            className="px:lg"
            options={{
              alignItems: 'center',
              DANGEROUS: { minHeight: '20vh' },
            }}
          >
            <Shape.Triangle />
            <Shape.Square />
            <Shape.Circle />
            <Shape sides={5} className="ml:auto" />
          </Row>
        </div>
        <div style={{ background: 'var(--gray-600)' }}>
          <Row
            as="div"
            className="px:lg"
            options={{
              alignItems: 'center',
              DANGEROUS: { minHeight: '20vh' },
            }}
          >
            <Shape.Triangle />
            <Shape.Square className="ml:auto mr:auto" />
            <Shape.Circle />
            <Shape sides={5} />
          </Row>
        </div>
      </Grid>
    </View.Full>
  )
}

export default PatternMarginAuto
