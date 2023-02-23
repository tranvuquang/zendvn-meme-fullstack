import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CommentState } from "./types";

const initialState: CommentState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setCommentsRedux: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { setCommentsRedux } = commentSlice.actions;

export const selectComment = (state: RootState) => state.comment;

export default commentSlice.reducer;
