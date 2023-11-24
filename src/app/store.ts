import {configureStore} from '@reduxjs/toolkit';
import sampleReducer from '../features/sampleSlice';


export const store = configureStore({
    reducer: {

        sample: sampleReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;