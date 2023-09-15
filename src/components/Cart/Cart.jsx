import React from "react";
import "./Cart.css";

const Cart = ({ selectedCourses, remaining, totalCredit }) => {
  console.log(selectedCourses);
  return (
    <div>
      <h2 className="text-blue-800 font-bold border-b-2 ">
        Credit Hour Remaining :{remaining}
      </h2>

      <h1 className="font-bold">Course Name</h1>
      {selectedCourses.map((course) => (
        <li key={course.price}>{course.title}</li>
      ))}
      <h2 className="border-t-2">Total Credit Hour : {totalCredit}</h2>
    </div>
  );
};

export default Cart;
