export const classes = (...params: unknown[]): string =>
  params.filter(Boolean).join(' ')

/*
  black(10);
*/

export const black = (percent: number): string => `rgba(0,0,0,${percent / 100})`

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
