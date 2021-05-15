import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
});

export const getAllCourses = async () => {
    const { data } = await instance.get("/courses");
    return data;
};

export const addCourseItem = async (payload) => {
    const { data } = await instance.post("/course", {
        title    : payload,
        dateStart: new Date().getTime() + 3600000
    });

    return data;
};

export const deleteCourseById = async (payload) => {
    const { data } = await instance.post("/course/delete", { data: payload });

    return data;
};
