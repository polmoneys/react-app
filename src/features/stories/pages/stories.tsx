// import { useAppDispatch, useAppSelector } from "@/config/store/hooks";
import useStories from "../hooks/useStories";

const Stories = () => {
  const { data, isFetching } = useStories();

  return (
    <article>
      <h1>Stories</h1>
    </article>
  );
};

export default Stories;
