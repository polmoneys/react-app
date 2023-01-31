import { useAppSelector } from "@/config/store/hooks";
import Toolbar from "../components/Toolbar";
import { selectSettings } from "../store";

const Dashboard = () => {
  const { zoom } = useAppSelector(selectSettings);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  return (
    <article>
      <Toolbar />
      <br aria-hidden="true" />
      <p> zoom level: {zoom}</p>
      <br aria-hidden="true" />
      <form
        id="form-id"
        // onsubmit="submit.disabled = true"
      >
        <label htmlFor="input-id">Label</label>
        <input
          onKeyDown={handleKeyDown}
          id="input-id"
          type="text"
          placeholder="text"
          defaultValue=""
        />
      </form>
      <br aria-hidden="true" />
      <button type="submit" form="form-id">
        Submit
      </button>
    </article>
  );
};

export default Dashboard;
