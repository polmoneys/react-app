import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { RootState } from "@/config/store";
import Stories, { AddStory } from "../interfaces/Stories";

/* 
dispatch(postUpdated({ id: postId, title, content }))

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  );
  */

const initialState: Stories = {
  list: [],
};

export const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    addStory: {
      reducer(state, { payload }: AddStory) {
        state.list.push(payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
    updateStory: (state, { payload }: AddStory) => {
      const { id, title, content } = payload;
      const existingPost = state.list.find(story => story.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { addStory, updateStory } = storiesSlice.actions;

export const selectFilters = (state: RootState) => state.stories.list;

export default storiesSlice.reducer;
