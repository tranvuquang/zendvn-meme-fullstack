import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { postDefaultData, PostState } from "./types";

const initialState: PostState = {
  posts: [],
  currentPost: postDefaultData,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostsRedux: (state, action) => {
      state.posts = action.payload;
    },
    setCurrentPostRedux: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPostsRedux, setCurrentPostRedux } = postSlice.actions;

export const selectPost = (state: RootState) => state.post;

export default postSlice.reducer;
