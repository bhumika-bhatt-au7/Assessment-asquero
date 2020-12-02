import React from 'react';
import './course.css';

function course(props) {
    
    return (
        <div className="CourseTab" key={props.id}>
            <img src={props.image} alt={props.courseName}/>
            <p>{props.courseName}</p>
        </div>   
    )
}


export default course
