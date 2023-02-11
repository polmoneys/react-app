import { useAppDispatch } from '@/config/store/hooks'
import { ButtonSuccess } from '@/system/components/Buttons'
import { HelveticaNeueBold } from '@/system/components/Typography'
import { setMaxZoom } from '../../store'

function Zoom() {
  const dispatch = useAppDispatch()

  return (
    <nav>
      <ButtonSuccess onClick={() => dispatch(setMaxZoom())}>
        <HelveticaNeueBold as="span">MAX</HelveticaNeueBold>
      </ButtonSuccess>
    </nav>
  )
}

export default Zoom
