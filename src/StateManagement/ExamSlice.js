import { createSlice } from '@reduxjs/toolkit';

const examinitialState = {
    activeComponent:"",
};
const ExamSlice = createSlice({
    name: 'examUser',
    initialState: examinitialState, 
    reducers: {
        setactiveComponent(state, action) {state.activeComponent = action.payload},
    },
});
export const {setactiveComponent } = ExamSlice.actions;
export const examReducer = ExamSlice.reducer;
