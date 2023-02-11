import type Font from '../Core/Font'
import { SIZES } from '../Core/Font'
import { Compose, ComposeSize } from '../Core/Font/utils'
import styles from '../Core/Font/index.module.css'

// Family variants
const HelveticaNeueThin = Compose(styles.thin)
const HelveticaNeue = Compose(styles.helveticaNeue)
const HelveticaNeueMedium = Compose(styles.medium)
const HelveticaNeueBold = Compose(styles.bold)
const Grotesk = Compose(styles.grotesk)

// Size variants
const GroteskXL = ComposeSize(Grotesk, SIZES.XL)
const HelveticaNeueBoldXL = ComposeSize(HelveticaNeueBold, SIZES.XL)
const HelveticaNeueBoldL = ComposeSize(HelveticaNeueBold, SIZES.LG)
const HelveticaNeueBoldS = ComposeSize(HelveticaNeueBold, SIZES.SM)
const HelveticaNeueXL = ComposeSize(HelveticaNeue, SIZES.XL)
const HelveticaNeueL = ComposeSize(HelveticaNeue, SIZES.LG)
const HelveticaNeueS = ComposeSize(HelveticaNeue, SIZES.SM)
const HelveticaNeueMediumL = ComposeSize(HelveticaNeueMedium, SIZES.LG)
const HelveticaNeueMediumXL = ComposeSize(HelveticaNeueMedium, SIZES.XL)

export {
  HelveticaNeue,
  HelveticaNeueMedium,
  HelveticaNeueBold,
  HelveticaNeueThin,
  Grotesk,
  GroteskXL,
  HelveticaNeueBoldXL,
  HelveticaNeueBoldL,
  HelveticaNeueBoldS,
  HelveticaNeueMediumXL,
  HelveticaNeueMediumL,
  HelveticaNeueXL,
  HelveticaNeueL,
  HelveticaNeueS,
}

export type Fonts =
  | typeof Font
  | typeof HelveticaNeue
  | typeof HelveticaNeueMedium
  | typeof HelveticaNeueBold
  | typeof HelveticaNeueThin
  | typeof HelveticaNeueBoldXL
  | typeof HelveticaNeueBoldS
  | typeof HelveticaNeueMediumL
  | typeof HelveticaNeueS
