import { useAppSelector } from "@/config/store/hooks";
import Toolbar from "../components/Toolbar";
import { selectSettings } from "../store";

const Dashboard = () => {
  const { zoom } = useAppSelector(selectSettings);

  return (
    <article>
      <Toolbar />
      <p> zoom level: {zoom}</p>
    </article>
  );
};

export default Dashboard;
