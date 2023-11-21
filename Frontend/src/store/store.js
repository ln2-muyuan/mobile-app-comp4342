import { configureStore } from '@reduxjs/toolkit';
import avatarReducer from './avatarSlice';


export default configureStore({
    reducer: {
        avatar: avatarReducer,
    },
});
