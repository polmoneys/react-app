import { HelveticaNeue, Col, Row, Grotesk, View } from '@/system/components'
import { repeatGradient, customGradient } from '@/system/utils/theme'

const a = repeatGradient(
  { start: 'var(--transparent)', end: 'var(--error-100)' },
  '50%',
  'x',
)
const b = repeatGradient(
  { start: 'var(--transparent)', end: 'var(--error-100)' },
  '25%',
  'x',
)

const c = repeatGradient(
  { start: 'var(--transparent)', end: 'var(--error-100)' },
  '14.28%',

  'x',
)
const d = repeatGradient(
  { start: 'var(--transparent)', end: 'var(--error-100)' },
  '8.33%',

  'x',
)
const custom = customGradient(
  [
    {
      color: 'var(--gray-600)',
      stop: '0%',
    },
    {
      color: 'var(--gray-600)',
      stop: '15%',
    },
    {
      color: 'var(--gray-500)',
      stop: '15%',
    },
    {
      color: 'var(--gray-500)',
      stop: '65%',
    },
    {
      color: 'var(--color-invalid)',
      stop: '65%',
    },
    {
      color: 'var(--color-invalid)',
      stop: '100%',
    },
  ],
  'x',
)

const PatternGradients = (): JSX.Element => {
  return (
    <View.Feature>
      <Col as="div" gap="var(--gap-2)">
        <HelveticaNeue>CSS gradients FTW</HelveticaNeue>
        <svg
          viewBox="0 0 100 36"
          width="100%"
          height="2em"
          style={{ border: '1px solid', background: a }}
        />
        <Row as="div">
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> Summer</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> Winter</Grotesk>
          </Row>
        </Row>
        <svg
          viewBox="0 0 100 36"
          width="100%"
          height="2em"
          style={{ border: '1px solid', background: b }}
        />
        <Row as="div">
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> Q1</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> Q2</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> Q3</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> Q4</Grotesk>
          </Row>
        </Row>
        <svg
          viewBox="0 0 100 36"
          width="100%"
          height="2em"
          style={{ border: '1px solid', background: c }}
        />
        <Row as="div">
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> MO</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> TU</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> WD</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> TH</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> FR</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> SAT</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> SU</Grotesk>
          </Row>
        </Row>

        <svg
          viewBox="0 0 100 36"
          width="100%"
          height="2em"
          style={{ border: '1px solid', background: d }}
        />
        <Row as="div">
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> JAN</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> FEB</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> MAR</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> APR</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> MAY</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> JUN</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> JUL</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> AUG</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> SEPT</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> OCT</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> NOV</Grotesk>
          </Row>
          <Row as="div" options={{ DANGEROUS: { flexGrow: 1 } }}>
            <Grotesk> DEC</Grotesk>
          </Row>
        </Row>
        <svg
          viewBox="0 0 100 36"
          width="100%"
          height="2em"
          style={{ border: '1px solid', background: custom }}
        />
        <Row as="div">
          <Row as="div">
            <Grotesk> Pictures 15%</Grotesk>
          </Row>
          <Row
            as="div"
            options={{
              justifyContent: 'center',
              DANGEROUS: { flexGrow: 1 },
            }}
          >
            <Grotesk> Music 50%</Grotesk>
          </Row>
          <Row as="div">
            <Grotesk> Free 35%</Grotesk>
          </Row>
        </Row>
      </Col>
    </View.Feature>
  )
}

export default PatternGradients
