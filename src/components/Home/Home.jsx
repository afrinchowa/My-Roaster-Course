/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";
import Course from "../Course/Course";
const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="md:w-3/4">
      <h1>Courses:{courses.length}</h1>
      {
        courses.map(course => <Course key={course.price}
        course={course}></Course>)
      }
    </div>
  );
};

export default Home;
