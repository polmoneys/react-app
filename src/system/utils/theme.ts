export const classes = (...params: unknown[]) =>
  params.filter(Boolean).join(' ')

/*
  black(10);
*/

export const black = (percent: number) => `rgba(0,0,0,${percent / 100})`
