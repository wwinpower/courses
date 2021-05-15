import {createSlice} from '@reduxjs/toolkit'
import {addNewCourseItem, fetchAllCourses, removeCourseById} from "../action/coursesAction";

const initialState = {
    count    : 0,
    courses  : [],
    isLoading: false,
    error    : ''
}

const course = createSlice({
    name         : "course",
    initialState,
    reducers     : {
        selected: (state, { payload }) => {
            state.courses = state.courses.map(course => (course._id === payload
                ? { ...course, select: !course.select }
                : course))
        },
    },
    extraReducers: {
        [fetchAllCourses.pending]   : (state, { meta }) => {
            state.isLoading        = true;
            state.currentRequestId = meta;
        },
        [fetchAllCourses.fulfilled] : (state, { payload, meta }) => {
            if (meta.requestId === state.currentRequestId.requestId) {
                state.courses          = payload.map(elm => ({ ...elm, select: false }));
                state.isLoading        = false;
                state.currentRequestId = "";
            }
        },
        [fetchAllCourses.rejected]  : (state, { meta, error }) => {
            if (state.currentRequestId === meta) {
                state.isLoading        = false;
                state.error            = error;
                state.currentRequestId = meta;
            }
        },
        [addNewCourseItem.fulfilled]: (state, { payload }) => {
            state.courses.push({ ...payload, select: false });
            state.isLoading = false;
        },
        [addNewCourseItem.pending]  : (state) => {
            state.isLoading = true;
        },
        [addNewCourseItem.rejected] : (state, { error }) => {
            state.isLoading = false;
            state.error     = error;
        },
        [removeCourseById.fulfilled]: (state, { payload }) => {
            state.courses   = payload;
            state.isLoading = false;
        },
        [removeCourseById.pending]  : (state) => {
            state.isLoading = true;
        },
        [removeCourseById.rejected] : (state, { error }) => {
            state.isLoading = false;
            state.error     = error;
        },
    }
})

export const { selected } = course.actions

export default course.reducer;
