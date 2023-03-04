import { useRef } from 'react'

type UnknownArray = unknown[]
type UnknownObject = Record<string, UnknownArray>
interface Option {
  id: string
  name: string
}

type Options = Option[]

/*

  const db = useCache();
  const isInCache = db.has(newQuery);
  db.get(newQuery);
  db.set(newQuery, matches);

*/

function useCache(): Record<string, unknown> {
  const initial: UnknownObject = {}
  const store = useRef({
    cache: initial,
    has(key: string) {
      const ok = this.cache[key] !== undefined
      return !!ok
    },
    set(key: string, value: UnknownArray | Options) {
      this.cache[key] = value
    },
    clear() {
      this.cache = {}
    },
    get(key: string) {
      if (!this.has(key)) {
        return undefined
      }
      return this.cache[key]
    },
  }).current

  return store
  // return useMemo(() => store.current, [])
}

export default useCache
