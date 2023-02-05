import { useAppDispatch, useAppSelector } from "@/config/store/hooks";
import {
  Grotesk,
  GroteskXL,
  HelveticaNeue,
  HelveticaNeueBold,
  HelveticaNeueMedium,
} from "@/system/components/Typography";
import { storiesSlice } from "../store";

/* 
    TODO:
    const {storyId} =  useParams()
    const story = useAppSelector(state =>
      state.stories.find(story => story.id === storyId)
    );
    dispatch(postUpdated({ id: postId, title, content }))
  */

const Story = () => {
  const dispatch = useAppDispatch();
  const { stories } = useAppSelector(storiesSlice);

  return (
    <article>
      <GroteskXL>Story</GroteskXL>
    </article>
  );
};

export default Story;
