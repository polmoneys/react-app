import { useParams } from 'react-router-dom'
import { HelveticaNeueBold, Breadcrumb, View } from '@/system/components'

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
