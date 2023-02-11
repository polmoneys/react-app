import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { RootState } from '@/config/store'
import { type AddStory } from '../interfaces/Stories'
import type Stories from '../interfaces/Stories'

const initialState: Record<'stories', Stories> = {
  stories: [],
}

export const storiesStore = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    addStory: {
      reducer(state, { payload }: AddStory) {
        state.stories.push(payload)
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
        }
      },
    },
    updateStory: (state, { payload }: AddStory) => {
      const { id, title, content } = payload
      const existingPost = state.stories.find(story => story.id === id)
      if (existingPost != null) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { addStory, updateStory } = storiesStore.actions

export const storiesSlice = (state: RootState) => state.stories

export default storiesStore.reducer
