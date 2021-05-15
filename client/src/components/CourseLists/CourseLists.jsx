import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCourses, removeCourseById} from "../../store/action/coursesAction";
import {selected} from "../../store/reducers/CourseReducer";
import {Course} from "../";
import classes from './CourseLists.module.scss';

const CourseLists = () => {

    const { courses, isLoading }    = useSelector(state => state.course);
    const [completed, setCompleted] = useState([])
    const dispatch                  = useDispatch();

    useEffect(() => {
        courses.length === 0 && dispatch(fetchAllCourses());
    }, [dispatch, courses])

    const toggleCourse = (_id) => {
        setCompleted(prev => {
            let check = prev.includes(_id);
            if (check) {
                prev.splice(_id.indexOf(), 1)
                return prev;
            } else {
                return [...prev, _id]
            }

        })
        dispatch(selected(_id))
    }

    const deleteCourse = () => {
        dispatch(removeCourseById(completed))
    }

    if (courses.length === 0) return 'No data available';

    if (isLoading) return 'loading ...';

    return (
        <section className={classes.CourseLists}>
            <ul className={classes['CourseLists__list']}>
                {
                    courses && courses.map(course => (<Course
                        key={course._id}
                        toggleCourse={() => toggleCourse(course._id)}
                        {...course}
                    />))
                }
            </ul>
            <button
                className={classes['CourseLists__button']}
                onClick={deleteCourse}
                disabled={completed.length === 0}
            >DELETE
            </button>
        </section>
    )
}

export default CourseLists;
