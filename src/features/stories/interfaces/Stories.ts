import { PayloadAction } from "@reduxjs/toolkit";

export type Story = Record<"id" | "title" | "releaseDate" | "director", string>;

export type AddStory = PayloadAction<{
  title: string;
  content: string;
  id: string;
}>;

export default interface Stories extends Array<Story> {}
