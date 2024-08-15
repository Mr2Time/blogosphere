import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        // basic user info
        user: null,
        // user's followers
        followers: [],
        // user's following
        following: [],
        // user's posts
        posts: [],
        // user's liked posts
        likedPosts: [],
}

export const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

        setFollowers: (state, action) => {
            state.followers = action.payload;
        },

        setFollowing: (state, action) => {
            state.following = action.payload;
        },

        setPosts: (state, action) => {
            state.posts = action.payload;
        },

        setLikedPosts: (state, action) => {
            state.likedPosts = action.payload;
        },

        updateFollowers: (state, action) => {
            state.followers = [...state.followers, action.payload];
        },

        updateFollowing: (state, action) => {
            state.following = [...state.following, action.payload];
        },

        updatePosts: (state, action) => {
            state.posts = [...state.posts, action.payload];
        },

        updateLikedPosts: (state, action) => {
            state.likedPosts = [...state.likedPosts, action.payload];
        },

        removeFollowers: (state, action) => {
            state.followers = state.followers.filter((follower) => follower !== action.payload);
        },

        removeFollowing: (state, action) => {
            state.following = state.following.filter((following) => following !== action.payload);
        },

        removePosts: (state, action) => {
            state.posts = state.posts.filter((post) => post !== action.payload);
        },

        removeLikedPosts: (state, action) => {
            state.likedPosts = state.likedPosts.filter((likedPost) => likedPost !== action.payload);
    }

}});