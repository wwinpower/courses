import {combineReducers, configureStore} from "@reduxjs/toolkit";
import courseReducer from "./reducers/CourseReducer";

const rootReducer = combineReducers({
    course: courseReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;
