import { PayloadAction } from "@reduxjs/toolkit";

export type Story = Record<
  "id" | "title" | "releaseDate" | "director" | "content",
  string
>;

export type AddStory = PayloadAction<{
  title: string;
  content: string;
  id: string;
  releaseDate: string;
  director: string;
}>;

export default interface Stories extends Array<Story> {}
