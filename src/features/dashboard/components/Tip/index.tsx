import { useParams } from 'react-router-dom'
import Breadcrumb from '@/system/components/Breadcrumb'
import { HelveticaNeueBold } from '@/system/components/Typography'
import View from '@/system/components/View'

const Tip = (): JSX.Element => {
  const { tip } = useParams()

  return (
    <View.Popout>
      <Breadcrumb to={`/css${tip ?? ''}`}>Tip {tip}</Breadcrumb>
      <HelveticaNeueBold>TIP ID: {tip}</HelveticaNeueBold>
    </View.Popout>
  )
}

export default Tip
