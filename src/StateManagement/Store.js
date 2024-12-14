import { configureStore } from '@reduxjs/toolkit';
import {examReducer} from './ExamSlice';

const rootReducer = {
    examUser: examReducer
};

const store = configureStore({
    reducer: rootReducer
});

export default store;