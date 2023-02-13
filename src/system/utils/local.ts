export const isDev = (): boolean => import.meta.env.MODE === 'development'

export const devWarn = (condition: boolean, message: string): void => {
  if (condition != null) {
    console.log(message)
  }
}
