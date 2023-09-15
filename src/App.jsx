import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <h1 className="text-6xl text-center font-bold  mb-10"> Course Registration </h1>
      <div className="md:flex">
        <Home></Home>
        <Cart></Cart>
      </div>
    </>
  );
}

export default App;
