import React from 'react';
import {CourseAction, CourseLists} from "./components";
import classes from './App.module.scss';

function App() {
    return (
        <main className="App">
            <div className={classes.container}>
                <CourseAction/>
                <CourseLists/>
            </div>
        </main>
    );
}

export default App;
