import { ChangeEvent, useCallback, useMemo, useState } from "react";

type ObjectBoolean = Record<string, boolean>;

function useLeader<T extends ObjectBoolean>(
  items: T
): [
  {
    output: T;
    all: boolean;
    mixed: boolean | "mixed";
  },
  {
    onFollowerChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onLeadChange: () => void;
    isSelected: (slice: string) => boolean;
  }
] {
  const [mixedState, dispatchUpdate] = useState<ObjectBoolean>(items);

  const allChecked = useMemo(() => {
    return Object.keys(mixedState).every(
      (slice: string) => mixedState[slice] === true
    );
  }, [mixedState]);

  const someChecked = useMemo(() => {
    return allChecked
      ? false
      : Object.keys(mixedState).some(
          (slice: string) => mixedState[slice] === true
        );
  }, [mixedState, allChecked]);

  const parentIsChecked = useMemo(() => {
    return allChecked ? true : someChecked ? "mixed" : false;
  }, [someChecked, allChecked]);

  const onLeadChange = useCallback(() => {
    return dispatchUpdate(
      Object.keys(mixedState).reduce(
        (state, slice) => ({
          ...state,
          [slice]: !allChecked,
        }),
        {}
      )
    );
  }, [allChecked, mixedState]);

  const onFollowerChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { checked, value } = event.target;
      return dispatchUpdate({
        ...mixedState,
        [value]: checked,
      });
    },
    [mixedState]
  );
  const isSelected = useCallback(
    (slice: string) => {
      return mixedState[slice];
    },
    [mixedState]
  );

  return [
    {
      output: mixedState as T,
      all: allChecked,
      mixed: parentIsChecked,
    },
    { onFollowerChange, onLeadChange, isSelected },
  ];
}

export default useLeader;
