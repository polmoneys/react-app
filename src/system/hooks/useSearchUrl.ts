import { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

/*
  Usage:
  const [urlState, setUrlState, updateCurrentUrlState, back] = useSearchUrl();
  credits => https://felixgerschau.com/js-manipulate-url-search-params/
*/

type SearchState = Record<string, string>

function useSearchUrl<T extends SearchState>(): readonly [
  T,
  (state: T) => void,
  (state: Partial<T>) => void,
  () => void,
] {
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const state = useMemo(
    () => Object.fromEntries([...searchParams]) as T,
    [searchParams],
  )

  const onChange = (newState: T): void => {
    if (newState === undefined) return
    setSearchParams(newState)
  }

  const onUpdate = (newState: Partial<T>): void => {
    setSearchParams({ ...state, ...newState })
  }

  const back = (): void => {
    navigate(-1)
  }

  return [state, onChange, onUpdate, back] as const
}

export default useSearchUrl
