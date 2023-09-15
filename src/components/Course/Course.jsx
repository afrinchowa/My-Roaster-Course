import PropTypes from 'prop-types';

/* eslint-disable no-unused-vars */
import React from 'react';

const Course = ({ course }) => {
    const{title,cover } = course;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <h2 className="text-xl">{title}</h2>
        </div>
    );
};

Course.PropTypes ={
    course:PropTypes.object
}
export default Course;