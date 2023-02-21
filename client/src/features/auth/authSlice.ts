import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AuthState, IUser, userDefaultData } from "./types";
import jwt_decode from "jwt-decode";

const accessToken = localStorage.getItem("accessToken") || "";

const getUser = () => {
  let user: IUser = userDefaultData;
  if (accessToken) {
    const { USERID, email, username, permission } = jwt_decode(
      accessToken
    ) as IUser;
    user = { ...user, USERID, email, username, permission };
  }
  return user;
};

const initialState: AuthState = {
  user: getUser(),
  accessToken,
  loading: false,
  categories: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserRedux: (state, action) => {
      // const { _id, email, username, isAdmin } = action.payload;
      // state.user = { ...state.user, _id, username, email, isAdmin };
      state.user = action.payload;
    },
    setAccessTokenRedux: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    setLoadingRedux: (state, action) => {
      state.loading = action.payload;
    },
    setCategoriesRedux: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setUserRedux, setAccessTokenRedux, setLoadingRedux,setCategoriesRedux } =
  authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
