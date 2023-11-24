import {createSlice} from '@reduxjs/toolkit';

export const sampleSlice = createSlice({
    name: 'sample',
    initialState: {
        // 초기 상태
    },
    reducers: {
        // 리듀서
    },
});

export const {actions: sampleAction} = sampleSlice;
export default sampleSlice.reducer;
