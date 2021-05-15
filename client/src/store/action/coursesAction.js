import {createAsyncThunk} from '@reduxjs/toolkit'
import {getAllCourses, addCourseItem, deleteCourseById} from "../api/courses";

export const fetchAllCourses = createAsyncThunk(
    "course/courses",
    async (_, { rejectWithValue }) => {
        try {
            return await getAllCourses();
        } catch (err) {
            return rejectWithValue([], err);
        }
    }
);

export const addNewCourseItem = createAsyncThunk(
    "course/course",
    async (payload, { rejectWithValue }) => {
        try {
            const course = await addCourseItem(payload);
            return course;
        } catch (err) {
            return rejectWithValue([], err);
        }
    }
);

export const removeCourseById = createAsyncThunk(
    "course/course/delete",
    async (payload, { rejectWithValue }) => {
        try {
            const course = await deleteCourseById(payload);
            return course;
        } catch (err) {
            return rejectWithValue([], err);
        }
    }
);
