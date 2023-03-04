import { Fragment } from 'react'
import {
  Grotesk,
  GroteskXL,
  HelveticaNeue,
  HelveticaNeueBold,
  HelveticaNeueL,
  GroteskLG,
  GroteskS,
  HelveticaNeueThin,
  Col,
  Row,
  IconBookmark,
  IconCaretDown,
  IconCaretUp,
  IconCheck,
  IconCross,
  IconHeart,
  IconTwitter,
  HelveticaNeueS,
  HelveticaNeueXL,
  HelveticaNeueMedium,
} from '@/system/components'

const TipFonts = (): JSX.Element => {
  return (
    <Fragment>
      <Col as="div" gap="var(--gap-3)">
        <Row as="div" gap="var(--gap-3)" options={{ alignItems: 'baseline' }}>
          <HelveticaNeueThin>Aa aa AA</HelveticaNeueThin>
          <HelveticaNeue>Aa aa AA</HelveticaNeue>
          <HelveticaNeueMedium>Aa aa AA</HelveticaNeueMedium>
          <HelveticaNeueBold>Aa aa AA</HelveticaNeueBold>
        </Row>
        <Row as="div" gap="69px" options={{ alignItems: 'baseline' }}>
          <Grotesk>300 </Grotesk>
          <Grotesk dangerousColor="var(--color-focus)">400</Grotesk>
          <Grotesk>500 </Grotesk>
          <Grotesk>600 </Grotesk>
        </Row>

        <Row as="div" gap="var(--gap-3)" options={{ alignItems: 'baseline' }}>
          <HelveticaNeueS>Aa aa AA</HelveticaNeueS>
          <HelveticaNeue>Bb bb BB</HelveticaNeue>
          <HelveticaNeueL>Cc cc CC</HelveticaNeueL>
          <HelveticaNeueXL>Dd dd DD</HelveticaNeueXL>
        </Row>
        <Row as="div" gap="90px" options={{ alignItems: 'baseline' }}>
          <Grotesk>S </Grotesk>
          <Grotesk dangerousColor="var(--color-focus)">M</Grotesk>
          <Grotesk>L </Grotesk>
          <Grotesk>XL </Grotesk>
        </Row>

        <Row as="div" gap="var(--gap-3)" options={{ alignItems: 'baseline' }}>
          <GroteskS>Aa aa AA</GroteskS>
          <Grotesk>Bb bb BB</Grotesk>
          <GroteskLG>Cc cc CC</GroteskLG>
          <GroteskXL>Dd dd DD</GroteskXL>
        </Row>
        <Row as="div" gap="100px" options={{ alignItems: 'baseline' }}>
          <Grotesk>S </Grotesk>
          <Grotesk dangerousColor="var(--color-focus)">M</Grotesk>
          <Grotesk>L </Grotesk>
          <Grotesk>XL </Grotesk>
        </Row>

        <Row as="div" gap="var(--gap-1)" options={{ wrap: 'wrap' }}>
          <IconBookmark stroke={'var(--accent)'} size="sm" label="" />
          <IconCaretDown stroke={'var(--accent)'} size="sm" label="" />
          <IconCaretUp stroke={'var(--accent)'} size="sm" label="" />
          <IconCheck stroke={'var(--accent)'} size="sm" label="" />
          <IconCross stroke={'var(--accent)'} size="sm" label="" />
          <IconHeart stroke={'var(--accent)'} size="sm" label="" />
          <IconTwitter stroke={'var(--accent)'} size="sm" label="" />

          <IconBookmark stroke={'var(--accent)'} label="" />
          <IconCaretDown stroke={'var(--accent)'} label="" />
          <IconCaretUp stroke={'var(--accent)'} label="" />
          <IconCheck stroke={'var(--accent)'} label="" />
          <IconCross stroke={'var(--accent)'} label="" />
          <IconHeart stroke={'var(--accent)'} label="" />
          <IconTwitter stroke={'var(--accent)'} label="" />

          <IconBookmark stroke={'var(--accent)'} size="lg" label="" />
          <IconCaretDown stroke={'var(--accent)'} size="lg" label="" />
          <IconCaretUp stroke={'var(--accent)'} size="lg" label="" />
          <IconCheck stroke={'var(--accent)'} size="lg" label="" />
          <IconCross stroke={'var(--accent)'} size="lg" label="" />
          <IconHeart stroke={'var(--accent)'} size="lg" label="" />
          <IconTwitter stroke={'var(--accent)'} size="lg" label="" />
        </Row>
        <Row as="div" gap="180px" options={{ alignItems: 'baseline' }}>
          <Grotesk>sm </Grotesk>
          <Grotesk dangerousColor="var(--color-focus)">md</Grotesk>
          <Grotesk>lg </Grotesk>
        </Row>
      </Col>
    </Fragment>
  )
}

export default TipFonts
