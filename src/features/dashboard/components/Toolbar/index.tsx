import { useAppDispatch } from "@/config/store/hooks";
import Button from "@/system/components/Button";
import { setMaxZoom } from "../../store";

function Toolbar() {
  const dispatch = useAppDispatch();

  return (
    <article>
      <Button onClick={() => dispatch(setMaxZoom())}>max</Button>
    </article>
  );
}

export default Toolbar;
