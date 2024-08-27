import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "", // user's id
  email: "", // user's email
  blogs: [], // user's blogs
  auth: localStorage.getItem("token") ? true : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.blogs = action.payload.blogs;
    },
    setAuth: (state, action) => {
      state.auth = action.payload.auth;
    },
    logout: (state, action) => {
      state = initialState;
      localStorage.removeItem("token");
      
    },
  },
});

export const { setUser, logout, setAuth } = userSlice.actions;
export default userSlice.reducer;
