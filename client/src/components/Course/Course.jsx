import moment from "moment";
import React, {useMemo} from "react";
import classes from './Course.module.scss';

const Course = ({ title, dateStart, toggleCourse, select }) => {

    const dataFormat = useMemo(() => {
        let date     = new Date().getTime();
        let remained = (dateStart - date) > 0 ? moment(dateStart - date).minutes() : 0;

        return remained > 0 ? `start in ${remained} min` : 'the course has already started';
    }, [dateStart])

    return (
        <li>
            <input
                type="checkbox"
                onChange={toggleCourse}
            />
            <label className={select ? classes.selected : null}>{`${title} - ${dataFormat}`}</label>
        </li>
    )
}

export default Course;
