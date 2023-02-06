import { useAppDispatch } from "@/config/store/hooks";
import Button from "@/system/components/Buttons";
import { HelveticaNeueBold } from "@/system/components/Typography";
import { setMaxZoom } from "../../store";

function Zoom() {
  const dispatch = useAppDispatch();

  return (
    <nav>
      <Button onClick={() => dispatch(setMaxZoom())}>
        <HelveticaNeueBold as="span">MAX</HelveticaNeueBold>
      </Button>
    </nav>
  );
}

export default Zoom;
