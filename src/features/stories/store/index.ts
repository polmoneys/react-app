import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { RootState } from "@/config/store";
import Stories, { AddStory } from "../interfaces/Stories";

/* 
dispatch(postUpdated({ id: postId, title, content }))

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  );
  */

const initialState: Record<"stories", Stories> = {
  stories: [],
};

export const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    addStory: {
      reducer(state, { payload }: AddStory) {
        state.stories.push(payload);
      },
      prepare(title, content, director, releaseDate) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            director,
            releaseDate,
          },
        };
      },
    },
    updateStory: (state, { payload }: AddStory) => {
      const { id, title, content } = payload;
      const existingPost = state.stories.find(story => story.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { addStory, updateStory } = storiesSlice.actions;

export const storiesFilter = (state: RootState) => state.stories;

export default storiesSlice.reducer;
