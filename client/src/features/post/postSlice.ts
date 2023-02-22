import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { PostState } from "./types";

const initialState: PostState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostsRedux: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPostsRedux } = postSlice.actions;

export const selectPost = (state: RootState) => state.post;

export default postSlice.reducer;
