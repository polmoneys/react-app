import { useAppDispatch } from "@/config/store/hooks";
import Button from "@/system/components/Button";
import { setMaxZoom } from "../../store";

function Zoom() {
  const dispatch = useAppDispatch();

  return (
    <nav>
      <Button onClick={() => dispatch(setMaxZoom())}>max</Button>
    </nav>
  );
}

export default Zoom;
