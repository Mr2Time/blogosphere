import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        // basic user info
        user: null,
        // user's followers
}

export const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

}});