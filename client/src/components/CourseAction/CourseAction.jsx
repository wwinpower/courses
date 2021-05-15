import React, {useState} from "react";
import {addNewCourseItem} from "../../store/action/coursesAction";
import {useDispatch} from "react-redux";
import classes from "./CourseAction.module.scss";

const CourseAction = () => {

    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const dispatch          = useDispatch();

    const handlerChangeInput = (e) => {
        setTitle(e.target.value);
    }

    const handlerAddCourseTitle = () => {
        if(title.length > 0 ){
            dispatch(addNewCourseItem(title));
            setTitle('');
            setError('');
        }else {
            setError('This field cannot be empty');
        }
    }

    return (
        <section className={classes.CourseAction}>
            <input
                type="text"
                onChange={handlerChangeInput}
                value={title}
                placeholder="Please enter the course name"
                className={classes['CourseAction__input']}
            />
            <button
                onClick={handlerAddCourseTitle}
                className={classes['CourseAction__button']}
            >ADD</button>

            {
                error.length > 0 ? <small className={classes.error}>{error}</small> : null
            }

        </section>
    )
}

export default CourseAction;
