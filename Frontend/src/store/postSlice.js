import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
    },
    reducers: {
        getLatestPosts: (state, action) => {
          
            state.posts = action.payload;
            // state.posts = [
            //     {
            //         email: "01@qq.com",
            //         title: "01",
            //         text: "01",
            //     },
            //     {
            //         email: "02@qq.com",
            //         title: "02",
            //         text: "02",
            //     },
            //     {
            //         email: "03@qq.com",
            //         title: "03",
            //         text: "03",
            //     },
            // ];
        },
    },
});

export const { getLatestPosts } = postSlice.actions;
export default postSlice.reducer;