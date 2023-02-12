import { useNavigate, useSearchParams } from 'react-router-dom'

/*
  Usage:
  const [urlState, setUrlState, updateCurrentUrlState, back] = useSearchUrl();
  
  details => https://felixgerschau.com/js-manipulate-url-search-params/

  platform => https://www.aleksandrhovhannisyan.com/blog/serializing-html-form-data-with-javascript/
*/

function useSearchUrl<T extends Record<string, string>>(): readonly [
  T,
  (state: T) => void,
  (state: Partial<T>) => void,
  () => void,
] {
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const state = Object.fromEntries([...searchParams])

  const onChange = (s: T): void => {
    setSearchParams(s)
  }

  const onUpdate = (s: Partial<T>): void => {
    setSearchParams({ ...state, ...s })
  }

  const back = (): void => {
    navigate(-1)
  }

  return [state as T, onChange, onUpdate, back]
}

export default useSearchUrl
