/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      fetch("courses.json")
        .then((res) => res.json())
        .then((data) => setCourses(data));
    }, []);
  return <div></div>;
};

export default Courses;
