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
const GroteskS = ComposeSize(Grotesk, SIZES.SM)
const GroteskLG = ComposeSize(Grotesk, SIZES.LG)
const GroteskXL = ComposeSize(Grotesk, SIZES.XL)
const HelveticaNeueBoldXL = ComposeSize(HelveticaNeueBold, SIZES.XL)
const HelveticaNeueBoldL = ComposeSize(HelveticaNeueBold, SIZES.LG)
const HelveticaNeueBoldS = ComposeSize(HelveticaNeueBold, SIZES.SM)
const HelveticaNeueXL = ComposeSize(HelveticaNeue, SIZES.XL)
const HelveticaNeueL = ComposeSize(HelveticaNeue, SIZES.LG)
const HelveticaNeueS = ComposeSize(HelveticaNeue, SIZES.SM)

export {
  HelveticaNeue,
  HelveticaNeueMedium,
  HelveticaNeueBold,
  HelveticaNeueThin,
  Grotesk,
  GroteskS,
  GroteskLG,
  GroteskXL,
  HelveticaNeueBoldXL,
  HelveticaNeueBoldL,
  HelveticaNeueBoldS,
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
  | typeof HelveticaNeueS
