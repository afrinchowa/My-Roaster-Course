/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
  const [courses , setCourses] = useState([])
  useEffect( () => {
    fetch('courses.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  }, [])


  return (
    <div className="md:w-3/4">
         <h1>Courses:{courses.length}</h1>
    </div>
  );
};

export default Home;
