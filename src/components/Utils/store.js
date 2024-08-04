import { configureStore } from '@reduxjs/toolkit'

import appSlice from './appSlice'
import liveChatSlice from './liveChatSlice';

const store = configureStore({
    reducer:{
        app:appSlice,
        chat: liveChatSlice,
    }
}
);
export default store;

