import { useReducer } from "react";

/*
  Usage:
  const [value, previousValue, setValue] = useStateWithPrevious('initialValue')
  credits https://thoughtbot.com/blog/custom-react-hooks
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
