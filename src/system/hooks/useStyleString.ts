import { useEffect, useCallback } from 'react'

interface StyleStringProps {
  id: string
  styles?: string
}

/*
    useStyleString({
        styles: `
        #beta .card {
        transition:all .7s ease-in;
        }
        #beta .card:after{content:"hi";color:currentColor;}
        #beta .card:hover  { 
        color:rgb(53, 44, 138);
        transform:scale(${is ? 2 : 1.2});
    }
        `,
        id: "beta"
    });
*/

const useStyleString = (props: StyleStringProps): void => {
  const { id, styles = '' } = props

  const appendStyles = useCallback(() => {
    const styleId = `style${id}`

    if (document.getElementById(styleId) != null) {
      throw new Error(`ID "${styleId}" is already in use.`)
    }
    console.log('hh')
    const styleTag = document.createElement('style')
    styleTag.id = styleId
    styleTag.innerHTML = `:root {
      --${id}-loaded: 1;
    } ${styles}`

    document.head.insertAdjacentElement('beforeend', styleTag)
  }, [id, styles])

  useEffect(() => {
    const cssVar = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(`--${id}-loaded`)
    console.log({ cssVar })
    if (cssVar === '') {
      appendStyles()
    }

    return () => {
      const styleTag = document.getElementById(`style${id}`)
      if (styleTag != null) {
        styleTag.remove()
      }
    }
  }, [id, appendStyles])
}

export default useStyleString
