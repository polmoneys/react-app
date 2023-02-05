import { useReducer } from "react";

// stolen from https://thoughtbot.com/blog/custom-react-hooks

/**
 * Just like `useState`, but it keeps track of the previous value and returns it
 * in the array.
 * Usage:
 *   const [value, previousValue, setValue] = useStateWithPrevious('initialValue')
 */
const useStateWithPrevious = (initialValue: string) => {
  const reducer = (
    state: Record<"value" | "previousValue", string>,
    value: string
  ) => ({
    value,
    previousValue: state.value,
  });

  const [{ value, previousValue }, setValue] = useReducer(reducer, {
    value: initialValue,
    previousValue: "",
  });

  return [value, previousValue, setValue];
};

export default useStateWithPrevious;
