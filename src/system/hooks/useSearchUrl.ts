import { useNavigate, useSearchParams } from "react-router-dom";

/*
  Usage:
  const [urlState, setUrlState, updateCurrentUrlState, back] = useSearchUrl();
 */

function useSearchUrl<T extends Record<string, string>>(): readonly [
  T,
  (state: T) => void,
  (state: Partial<T>) => void,
  () => void
] {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const state = Object.fromEntries([...searchParams]);

  const onChange = (s: T) => setSearchParams(s);
  const onUpdate = (s: Partial<T>) => setSearchParams({ ...state, ...s });

  const back = () => navigate(-1);

  return [state as T, onChange, onUpdate, back];
}

export default useSearchUrl;
