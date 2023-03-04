import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { HelveticaNeueBold, Breadcrumb, View, Col } from '@/system/components'
import TipButtons from './buttons'
import TipFonts from './fonts'

const Tip = (): JSX.Element => {
  const { tip: tipParam } = useParams()
  const tip = tipParam ?? 'undefined'
  return (
    <View.Feature>
      <Breadcrumb to={`/tips${tipParam ?? ''}`}>Tip {tipParam}</Breadcrumb>
      <Col as="div" gap="var(--gap-3)">
        <HelveticaNeueBold>TIP {tipParam}</HelveticaNeueBold>
        {
          {
            buttons: <TipButtons />,
            fonts: <TipFonts />,
            undefined: <Fragment />,
          }[tip]
        }
      </Col>
    </View.Feature>
  )
}

export default Tip
