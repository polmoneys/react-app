import { useAppDispatch } from "@/config/store/hooks";
import { setMaxZoom } from "../../store";

function Toolbar() {
  const dispatch = useAppDispatch();

  return (
    <article>
      <button type="button" onClick={() => dispatch(setMaxZoom())}>
        max
      </button>
    </article>
  );
}

export default Toolbar;
