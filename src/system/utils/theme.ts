export const classes = (...params: unknown[]): string =>
  params.filter(Boolean).join(' ')

/*
  black(10);
*/

export const black = (percent: number): string => `rgba(0,0,0,${percent / 100})`
