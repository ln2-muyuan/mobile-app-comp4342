import { configureStore } from '@reduxjs/toolkit';
import avatarReducer from './avatarSlice';
import postReducer from './postSlice';

export default configureStore({
    reducer: {
        avatar: avatarReducer,
        posts: postReducer,
    },
});