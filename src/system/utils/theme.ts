export const classes = (...params: unknown[]): string =>
  params.filter(Boolean).join(' ')

/*
  black(10);
*/

export const black = (percent: number): string => `rgba(0,0,0,${percent / 100})`

/**
 * Utility to fill lines with gradients according to a value
 * <li data-width="44"/>
 * <li data-width="89"/>
 * hint: quick horizonatal bar charts
 */

export function gradient(
  selector = 'li',
  gradient = '90deg, #bf71ff 3%, #1cbfff, #6afff3 100%',
  chart?: boolean,
): void {
  const lines = document.querySelectorAll(selector)

  for (const line of lines as any) {
    const width = line.dataset.width
    const inverse = (100 / Number(width)) * 100
    line.style.backgroundImage = `linear-gradient(${gradient})`
    line.style.backgroundSize = `${inverse}% 100%`
    if (chart !== undefined) {
      line.style.width = `${width as number}%`
    }
  }
}

export type Colors = Record<'start' | 'end', string>
export type Percentage = `${string}%`
export type Direction = 'x' | 'y'
export interface Stop {
  stop: Percentage
  color: string
}
export interface Stops extends Array<Stop> {}

export const repeatGradient = (
  colors: Colors,
  size: Percentage,
  direction: Direction,
): string => `repeating-linear-gradient(
    ${direction === 'x' ? '90deg' : '0deg'},
    ${colors?.start ?? 'currentColor'}, 
    ${colors?.start ?? 'currentColor'} ${size},
    ${colors?.end ?? 'transparent'} ${size},
    ${colors?.end ?? 'transparent'} ${Number(size.replace('%', '')) * 2}%)`

/**

function transformResultsIntoStops(input: LibraryUploadResults): Stops {
    const output: Stops = [];
    const successCount = input.filter((item) => item.success).length;
    const totalLength = input.length;
    const percentageIncrement = 100 / totalLength;

    input.sort((a, b) => (a.success === b.success ? 0 : a.success ? -1 : 1));

    for (let i = 0; i < totalLength; i++) {
        const color = input[i].success ? 'var(--color-success)' : 'var(--color-error)';
        const stop = i < successCount ? i * percentageIncrement : (i - successCount) * percentageIncrement + 50;
        const { name } = input[i];

        output.push({ color, stop: `${stop}%`, name });
        output.push({ color, stop: `${stop + percentageIncrement}%`, name });
    }

    return output;
}
 */

export const customGradient = (stops: Stops, direction: Direction): string =>
  `repeating-linear-gradient(${direction === 'x' ? '90deg' : '0deg'}, ${stops
    .reduce((acc, current) => acc + `${current.color} ${current.stop},`, '')
    .slice(0, -1)})`

export const get1Fr = (): number | string => {
  const grid = document.querySelector('.grid')
  if (grid != null) {
    return getComputedStyle(grid).gridTemplateColumns
  }
  return 0
}

/*
  Usage:
  
  const css = `
    :root {
        --${styleSheetID}-loaded:1;
      --${styleSheetID}-bg: ${param.bg};
    }
    [card-state="active"] {
        background-color: var(--${styleSheetID}-bg);
    }
  `;
*/

export function addStylesheet(styleSheetID: string, styles: string): void {
  const doc = document
  const head = document.getElementsByTagName('head')[0]

  if (doc.getElementById(styleSheetID) != null) {
    doc.getElementById(styleSheetID)?.remove()
  }

  const styleEl = doc.createElement('style') as any
  styleEl.id = styleSheetID

  if (styleEl.styleSheet != null) {
    styleEl.styleSheet.cssText = styles
  } else {
    styleEl.appendChild(doc.createTextNode(styles))
  }
  head.appendChild(styleEl)
}

export function paintBody(): void {
  const body = document.querySelector('body')
  if (body !== null) {
    body.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215,
    ).toString(16)}`
  }
}
