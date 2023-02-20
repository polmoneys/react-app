import { type ChangeEvent, useCallback, useMemo, useState } from 'react'

type ObjectBoolean = Record<string, boolean>

function useLeader<T extends ObjectBoolean>(
  items: T,
): [
  {
    output: T
    all: boolean
    mixed: boolean
  },
  {
    onFollowerChange: (event: ChangeEvent<HTMLInputElement>) => void
    onLeadChange: () => void
    isSelected: (slice: string) => boolean
  },
] {
  const [mixedState, dispatchUpdate] = useState<ObjectBoolean>(items)

  const allChecked = useMemo(() => {
    return Object.keys(mixedState).every((slice: string) => mixedState[slice])
  }, [mixedState])

  const someChecked = useMemo(() => {
    return allChecked
      ? false
      : Object.keys(mixedState).some((slice: string) => mixedState[slice])
  }, [mixedState, allChecked])

  const isMixed = useMemo(() => {
    return !!(someChecked && !allChecked)
  }, [someChecked, allChecked])

  const onLeadChange = useCallback(() => {
    dispatchUpdate(
      Object.keys(mixedState).reduce(
        (state, slice) => ({
          ...state,
          [slice]: !allChecked,
        }),
        {},
      ),
    )
  }, [mixedState, allChecked])

  const onFollowerChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name } = event.target
      dispatchUpdate(prevState => ({
        ...prevState,
        [name]: !prevState[name],
      }))
    },
    [mixedState],
  )
  const isSelected = useCallback(
    (slice: string) => {
      return mixedState[slice]
    },
    [mixedState],
  )

  return [
    {
      output: mixedState as T,
      all: allChecked,
      mixed: isMixed,
    },
    { onFollowerChange, onLeadChange, isSelected },
  ]
}

export default useLeader
