import { useAppSelector } from "@/config/store/hooks";
import { GroteskXL, HelveticaNeue } from "@/system/components/Typography";
import Toolbar from "../components/Toolbar";
import { selectSettings } from "../store";

const Dashboard = () => {
  const { zoom } = useAppSelector(selectSettings);

  return (
    <article>
      <GroteskXL>Hello, friend. </GroteskXL>
      <HelveticaNeue> Current zoom level: {zoom}</HelveticaNeue>
      <br aria-hidden="true" />

      <Toolbar />
    </article>
  );
};

export default Dashboard;
