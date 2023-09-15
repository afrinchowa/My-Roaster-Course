/* eslint-disable no-unused-vars */
// import PropTypes from "prop-types";

import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.price === course.price);
    let count = course.credit_hour;

    if (isExist) {
      alert("Already buy");
    } else {
      selectedCourses.forEach((item) => {
        count += item.credit_hour;
      });

      const totalRemaining = 20 - count;

      if (count > 20) {
        return alert(" OOPS!!! Sorry!!! Max Credit Reached");
      }else{
        setTotalCredit(count);
        setRemaining(totalRemaining);
        setSelectedCourses([...selectedCourses, course]);
      }
    
    }
  };

  return (
    <div className="container ">
      <div className="home-container">
        <div className="card-container ">
          {courses.map((course) => (
            <div key={course.price} className="card shadow-2xl">
              <img src={course.cover} alt="" />
              <h2 className="text-base font-semibold text-center">
                {course.title}
              </h2>
              <p className="text-sm font-normal">{course.description}</p>
              <div className="flex justify-around">
                <small>Price:{course.price}</small>
                <small>Credit:{course.credit_hour}</small>
              </div>
              <button
                onClick={() => handleSelectCourse(course)}
                className="bg-blue-500 w-full   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="cart shadow-2xl w-auto h-96 rounded-lg">
          <Cart
            selectedCourses={selectedCourses}
            remaining={remaining}
            totalCredit={totalCredit}
          ></Cart>
        </div>
      </div>
    </div>
  );
};
// Home.PropTypes = {
//   course: PropTypes.object,
// };

export default Home;
